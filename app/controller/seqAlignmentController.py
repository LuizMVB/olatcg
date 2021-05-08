from flask import Flask
from app.model import seqAlignment

'''
def dnaGlobalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty):
    return seqAlignment.dnaAlign(seq1, seq2, float(gap_open_penalty), float(gap_extend_penalty))
'''
def dnaLocalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty):
    return seqAlignment.dnaAlign(seq1, seq2, float(gap_open_penalty), float(gap_extend_penalty), True)
'''
def rnaGlobalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty):
    return seqAlignment.rnaAlign(seq1, seq2, float(gap_open_penalty), float(gap_extend_penalty))

def rnaLocalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty):
    return seqAlignment.rnaAlign(seq1, seq2, float(gap_open_penalty), float(gap_extend_penalty), True)

def proteinGlobalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty):
    return seqAlignment.proteinAlign(seq1, seq2, float(gap_open_penalty), float(gap_extend_penalty))

def proteinLocalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty):
    return seqAlignment.proteinAlign(seq1, seq2, float(gap_open_penalty), float(gap_extend_penalty), True)
'''