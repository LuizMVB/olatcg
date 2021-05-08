from skbio.io import read
from skbio import DNA
from app.model import seqAlignment
import qiime_default_reference as qdr
import random

def defineTaxSeqsFile(uploadedSeqsFile):
#    uploadSeqsFile(uploadedSeqsFile)
    return compareWithDB(uploadedSeqsFile, qdr.get_reference_sequences(), qdr.get_reference_taxonomy())

#def uploadSeqsFile(uploadedSeqsFile):
#    uploadedSeqsFile.save('model/data/user/uploads/' + uploadedSeqsFile.filename)

def compareWithDB(uploadedSeqsFile, seqsDb, taxDb):
    reference_db = random.sample(loadRefSeqs(seqsDb, loadTaxData(taxDb)), k=10)

    seq = str(uploadedSeqsFile.readline()).strip("b'{\}rn")
    seqsInFile = []

    while seq:
        seqsInFile.append(seq)
        seq = str(uploadedSeqsFile.readline()).strip("b'{\}rn")
    
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

    return response

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