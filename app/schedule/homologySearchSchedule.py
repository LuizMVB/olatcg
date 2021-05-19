import threading
from app.model import homologySearch
from app.model.dataBase import create, update;
import os

tableName = "HomologySearch"
tableNameOutput = "HomologySearchOutput"
uploads_dir = "app/model/data/user_data"

def defineTaxSeqsFile(uploadedSeqsFile):
    msg, status = create(tableName, {}, default_values=True)
    uploadedSeqsFile.save(os.path.join(uploads_dir, msg['processId'] + '.txt'))
    threading.Thread(target=processHomologySearch, args=(msg['processId'], os.path.join(uploads_dir, msg['processId'] + '.txt'))).start()
    return msg, status

def processHomologySearch(homologySearchId, uploadedSeqsFilePath):
    homologySearch.defineTaxSeqsFile(homologySearchId, uploadedSeqsFilePath)
