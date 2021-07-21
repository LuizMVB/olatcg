from app.model.dataBase import read
import json

def getAlignTable():
    return generate_dto(read('Align'))
    
def getHomologySearchTable():
    return read('HomologySearch')

def getHomologySearchOutputTable(homologySearchId):
    return read('HomologySearchOutput', conditions='homologySearchId=' + homologySearchId)

def generate_dto(data):
    dto = {}
    for item in json.loads(data):
        id = item[0]   
        dto[id] = {
            'aln1': item[1],
            'aln2': item[2],
            'score': item[3],
            'similarity': item[4],
            'is_loaded': item[5],
            'aln_type': item[6],
            'erro': item[7],
        }
    return dto
    