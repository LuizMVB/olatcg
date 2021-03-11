from flask import Blueprint
from controller import seqAlignmentController
from flask import request

seqAlignmentView = Blueprint('seqAlignmentView', __name__)

@seqAlignmentView.route('/dnaGlobalAlignment/<seq1>/<seq2>/<gap_open_penalty>/<gap_extend_penalty>')
def dnaGlobalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty):
    return seqAlignmentController.dnaGlobalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty)

@seqAlignmentView.route('/dnaLocalAlignment/<seq1>/<seq2>/<gap_open_penalty>/<gap_extend_penalty>')
def dnaLocalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty):
    return seqAlignmentController.dnaLocalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty)

@seqAlignmentView.route('/rnaGlobalAlignment/<seq1>/<seq2>/<gap_open_penalty>/<gap_extend_penalty>')
def rnaGlobalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty):
    return seqAlignmentController.rnaGlobalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty)

@seqAlignmentView.route('/rnaLocalAlignment/<seq1>/<seq2>/<gap_open_penalty>/<gap_extend_penalty>')
def rnaLocalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty):
    return seqAlignmentController.rnaLocalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty)

@seqAlignmentView.route('/proteinGlobalAlignment/<seq1>/<seq2>/<gap_open_penalty>/<gap_extend_penalty>')
def proteinGlobalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty):
    return seqAlignmentController.proteinGlobalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty)

@seqAlignmentView.route('/proteinLocalAlignment/<seq1>/<seq2>/<gap_open_penalty>/<gap_extend_penalty>')
def proteinLocalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty):
    return seqAlignmentController.proteinLocalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty)