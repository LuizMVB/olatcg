from app.model import phylogeny

def get_tree(fasta_file):
    return phylogeny.get_tree(fasta_file)