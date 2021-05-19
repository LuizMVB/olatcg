import os

def get_reference_sequences():
    return os.path.join(os.path.dirname(os.path.abspath(__file__)), 'sequence_references', 'seqs.fasta')

def get_reference_taxonomy():
    return os.path.join(os.path.dirname(os.path.abspath(__file__)), 'taxonomy_references', 'taxonomy.txt')