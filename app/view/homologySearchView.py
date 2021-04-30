from flask import Blueprint
from app.controller import homologySearchController
from flask import request

homologySearchView = Blueprint('homologySearchView', __name__)

@homologySearchView.route('/defineTaxSeqsFile', methods=['POST'])
def defineTaxSeqsFile():
    if request.method == 'POST':
        #try:
        return homologySearchController.defineTaxSeqsFile(request.files['uploaded_seqs_file'])
            #return {'ok': 'all right'} #change to valid response later
        #except:
        #    raise Exception("error when trying to upload") #thinking about how to respond specific errors later