from app.model import phylogeny

def create_tree(annotated_seq_file):
    return phylogeny.create_tree(annotated_seq_file)

def get_trees():
    return phylogeny.get_trees()