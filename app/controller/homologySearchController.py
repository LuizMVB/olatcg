from flask import Flask
from app.model import seqAlignment
from app.model import homologySearch

def defineTaxSeqsFile(uploadedSeqsFile):
    return homologySearch.defineTaxSeqsFile(uploadedSeqsFile)