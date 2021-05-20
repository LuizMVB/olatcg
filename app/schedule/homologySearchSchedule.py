import threading
from app.model import homologySearch
from app.model.dataBase import create, update;
import os

tableName = "HomologySearch"

def defineTaxSeqsFile(uploadedSeqsFile):
    msg, status = create(tableName, {}, default_values=True)
    seqsInFile = create_line_by_line_list(uploadedSeqsFile)
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