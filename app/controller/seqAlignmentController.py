from app.schedule import seqAlignmentScheduler


def dnaGlobalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty):
    msg, status = seqAlignmentScheduler.dnaGlobalAlignment(seq1, seq2, float(gap_open_penalty), float(gap_extend_penalty))
    return msg, status

def dnaLocalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty):
    msg, status = seqAlignmentScheduler.dnaLocalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty)
    return msg, status

def rnaGlobalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty):
    msg, status = seqAlignmentScheduler.rnaGlobalAlignment(seq1, seq2, float(gap_open_penalty), float(gap_extend_penalty))
    return msg, status

def rnaLocalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty):
    msg, status = seqAlignmentScheduler.rnaLocalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty)
    return msg, status

def proteinGlobalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty):
    msg, status = seqAlignmentScheduler.proteinGlobalAlignment(seq1, seq2, float(gap_open_penalty), float(gap_extend_penalty))
    return msg, status

def proteinLocalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty):
    msg, status = seqAlignmentScheduler.proteinLocalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty)
    return msg, status