from skbio.io import read
from skbio import DNA
from app.model import seqAlignment
import qiime_default_reference as qdr
from app.model.dataBase import create, update
import threading
from app.model.data import refs
import os

tableName = "HomologySearch"
tableNameOutput = "HomologySearchOutput"

def defineTaxSeqsFile(homologySearchId, uploadedSeqsFilePath):
    return compareWithDB(homologySearchId, uploadedSeqsFilePath, refs.get_reference_sequences(), refs.get_reference_taxonomy())

def compareWithDB(homologySearchId, uploadedSeqsFilePath, seqsDb, taxDb):
    reference_db = loadRefSeqs(seqsDb, loadTaxData(taxDb))

    uploadedSeqsFile = open(uploadedSeqsFilePath, 'r')

    seq = str(uploadedSeqsFile.readline()).strip("\n")
    seqsInFile = []
    while seq:
        seqsInFile.append(seq)
        seq = str(uploadedSeqsFile.readline()).strip("\n")
    
    highSimilarityAlnObjs = []
    alnObj = {}
    alnObjTmp = {}
    for seq in seqsInFile:
        for refSeq in reference_db:
            if alnObj == {}:
                alnObj = seqAlignment.dnaLocalAlignSsw(seq, str(refSeq))
                alnObj['taxonomy'] = refSeq.metadata['taxonomy']
            else:
                alnObjTmp = seqAlignment.dnaLocalAlignSsw(seq, str(refSeq))
                if alnObjTmp['similarity'] > alnObj['similarity']:
                    alnObj = alnObjTmp
                    alnObj['taxonomy'] = refSeq.metadata['taxonomy']
        highSimilarityAlnObjs.append(alnObj)
        alnObj = {}
        alnObjTmp = {}
    ids = range(len(highSimilarityAlnObjs))

    response = dict(zip(ids, highSimilarityAlnObjs))

    columns = {}
    
    for id in ids:
        columns = {
            'aln1': response[id]['aln1'],
            'aln2': response[id]['aln2'],
            'score': response[id]['score'],
            'similarity': response[id]['similarity'],
            'taxonomy': response[id]['taxonomy'],
            'homologySearchId': homologySearchId
        }
        msg, status = create(tableNameOutput, columns)
    msg, status = update(tableName, {'isLoaded': 'TRUE'}, conditions='id=' + str(homologySearchId))
    
    print("Status returned for the Thread {0}: {1} - {2}".format(
        threading.current_thread().name, status, msg))

    if os.path.exists(uploadedSeqsFilePath):
        os.remove(uploadedSeqsFilePath)
    
def loadTaxData(taxDb):
    reference_taxonomy = {}
    for e in open(taxDb):
        seq_id, seq_tax = e.strip().split('\t')
        reference_taxonomy[seq_id] = seq_tax
    return reference_taxonomy

def loadRefSeqs(seqsDb, taxRef):
    reference_db = []
    for e in read(seqsDb, format='fasta', constructor=DNA):
        if e.has_degenerates():
            # For the purpose of this lesson, we're going to ignore sequences that contain
            # degenerate characters (i.e., characters other than A, C, G, or T)
            continue
        seq_tax = taxRef[e.metadata['id']]
        e.metadata['taxonomy'] = seq_tax
        reference_db.append(e)
    return reference_db