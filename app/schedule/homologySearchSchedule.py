import threading
from app.model import homologySearch
from app.model.dataBase import create, update;
import os

tableName = "HomologySearch"

def defineTaxSeqsFile(uploadedSeqsFile):
    seqsInFile = create_line_by_line_list(uploadedSeqsFile)
    text_seqs = "\n".join(seqsInFile)
    columns = {
        "seqFile": text_seqs,
    }
    msg, status = create(tableName, columns=columns)
    threading.Thread(target=processHomologySearch, args=(msg['processId'], seqsInFile)).start()
    return msg, status

def create_line_by_line_list(uploadedSeqsFile):
    seq = str(uploadedSeqsFile.readline()).strip("b'{\}rn")
    seqsInFile = []
    while seq:
        seqsInFile.append(seq)
        seq = str(uploadedSeqsFile.readline()).strip("b'{\}rn")
    return seqsInFile

def processHomologySearch(homologySearchId, seqsInFile):
    homologySearch.defineTaxSeqsFile(homologySearchId, seqsInFile)