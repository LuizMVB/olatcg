from flask import Blueprint
from app.controller import seqAlignmentController
from flask import request
import threading

seqAlignmentView = Blueprint('seqAlignmentView', __name__)

@seqAlignmentView.route('/dnaGlobalAlignment', methods=['POST'])
def dnaGlobalAlignment():
    seq1 = request.form['seq1']
    seq2 = request.form['seq2']
    gap_open_penalty = request.form['gap_open_penalty']
    gap_extend_penalty = request.form['gap_extend_penalty']
    return seqAlignmentController.dnaGlobalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty)

@seqAlignmentView.route('/dnaLocalAlignment', methods=['POST'])
def dnaLocalAlignment():
    seq1 = request.form['seq1']
    seq2 = request.form['seq2']
    gap_open_penalty = request.form['gap_open_penalty']
    gap_extend_penalty = request.form['gap_extend_penalty']
    msg, status = seqAlignmentController.dnaLocalAlignment(seq1, seq2, gap_open_penalty, gap_open_penalty)
    id = msg['processId']
    return {"Message": msg['Message'] + " and added to Thread to process dna Local Alignment", "processId": id}, status


@seqAlignmentView.route('/rnaGlobalAlignment', methods=['POST'])
def rnaGlobalAlignment():
    seq1 = request.form['seq1']
    seq2 = request.form['seq2']
    gap_open_penalty = request.form['gap_open_penalty']
    gap_extend_penalty = request.form['gap_extend_penalty']
    return seqAlignmentController.rnaGlobalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty)

@seqAlignmentView.route('/rnaLocalAlignment', methods=['POST'])
def rnaLocalAlignment():
    seq1 = request.form['seq1']
    seq2 = request.form['seq2']
    gap_open_penalty = request.form['gap_open_penalty']
    gap_extend_penalty = request.form['gap_extend_penalty']
    return seqAlignmentController.rnaLocalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty)

@seqAlignmentView.route('/proteinGlobalAlignment', methods=['POST'])
def proteinGlobalAlignment():
    seq1 = request.form['seq1']
    seq2 = request.form['seq2']
    gap_open_penalty = request.form['gap_open_penalty']
    gap_extend_penalty = request.form['gap_extend_penalty']
    return seqAlignmentController.proteinGlobalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty)

@seqAlignmentView.route('/proteinLocalAlignment', methods=['POST'])
def proteinLocalAlignment():
    seq1 = request.form['seq1']
    seq2 = request.form['seq2']
    gap_open_penalty = request.form['gap_open_penalty']
    gap_extend_penalty = request.form['gap_extend_penalty']
    return seqAlignmentController.proteinLocalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty)
