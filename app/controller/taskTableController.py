from flask import Flask
from app.model import taskTable

def getAlignTable():
    return taskTable.getAlignTable()

#def getHomologySearchTable():
#    return taskTable.getHomologySearchTable()
