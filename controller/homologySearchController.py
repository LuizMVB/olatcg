from flask import Flask
from model import seqAlignment
from model import homologySearch

def defineTaxSeqsFile(uploadedSeqsFile):
    return homologySearch.defineTaxSeqsFile(uploadedSeqsFile)