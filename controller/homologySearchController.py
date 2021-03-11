from flask import Flask
from model.scikitBio import seqAlignment
from model.scikitBio import homologySearch

def defineTaxSeqsFile(uploadedSeqsFile):
    return homologySearch.defineTaxSeqsFile(uploadedSeqsFile)