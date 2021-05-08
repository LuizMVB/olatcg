from app.model.dataBase import read

def getAlignTable():
    return read('Align')

#def getHomologySearchTable():
#    return read('HomologySearch')
    