from app.schedule import homologySearchSchedule
from app.model import homologySearch

def defineTaxSeqsFile(uploadedSeqsFile):
    msg, status = homologySearchSchedule.defineTaxSeqsFile(uploadedSeqsFile)
    return msg, status