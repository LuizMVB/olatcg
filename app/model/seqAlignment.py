from skbio.alignment import local_pairwise_align, global_pairwise_align, local_pairwise_align_nucleotide, global_pairwise_align_nucleotide
from skbio.alignment import local_pairwise_align_ssw
from skbio import DNA, RNA, Protein
from app.model.data.system.substitution_matrix import blosum50



def dnaAlign(seq1, seq2, gap_open_penalty, gap_extend_penalty, local=False):
    
    seq1 = seq1.upper()
    seq2 = seq2.upper()
    
    if local:
        aln, score, _ = local_pairwise_align_nucleotide(DNA(seq1), DNA(seq2), gap_open_penalty, 
        gap_extend_penalty)
    else:
        aln, score, _ = global_pairwise_align_nucleotide(DNA(seq1), DNA(seq2), gap_open_penalty, 
            gap_extend_penalty)
    
    response = {
        'aln1': str(aln[0]),
        'aln2': str(aln[1]),
        'score': score,
        'similarity': float('{:.2f}'.format(aln[0].match_frequency(aln[1], relative=True) * 100))
    }

    return response

        

        

'''
def rnaAlign(seq1, seq2, gap_open_penalty, gap_extend_penalty, local=False):
    seq1 = seq1.upper()
    seq2 = seq2.upper()
    
    if local:
        aln, score, _ = local_pairwise_align_nucleotide(RNA(seq1), RNA(seq2), gap_open_penalty, 
        gap_extend_penalty)
    else:
        aln, score, _ = global_pairwise_align_nucleotide(RNA(seq1), RNA(seq2), gap_open_penalty, 
            gap_extend_penalty)
    
    response = {
        'aln1': str(aln[0]),
        'aln2': str(aln[1]),
        'score': score,
        'similarity': float('{:.2f}'.format(aln[0].match_frequency(aln[1], relative=True) * 100))
    }

    return response

def proteinAlign(seq1, seq2, gap_open_penalty, gap_extend_penalty, local=False):
    seq1 = seq1.upper()
    seq2 = seq2.upper()

    if local:
        aln, score, _ = local_pairwise_align(Protein(seq1), Protein(seq2), gap_open_penalty, 
        gap_extend_penalty, blosum50)
    else:
        aln, score, _ = global_pairwise_align(Protein(seq1), Protein(seq2), gap_open_penalty, 
            gap_extend_penalty, blosum50, penalize_terminal_gaps=True)
    
    response = {
        'aln1': str(aln[0]),
        'aln2': str(aln[1]),
        'score': score,
        'similarity': float('{:.2f}'.format(aln[0].match_frequency(aln[1], relative=True) * 100))
    }

    return response

def dnaLocalAlignSsw(seq1, seq2):
    seq1 = seq1.upper()
    seq2 = seq2.upper()
    
    msa, score, _ = local_pairwise_align_ssw(DNA(seq1), DNA(seq2))
    
    response = {
        'seq1': str(seq1),
        'aln1': str(msa[0]),
        'aln2': str(msa[1]),
        'score': score,
        'similarity': float('{:.2f}'.format(msa[0].match_frequency(msa[1], relative=True) * 100))
    }

    return response
    '''