from skbio import DNA, TabularMSA, DistanceMatrix
from skbio.sequence.distance import hamming
from skbio.tree import nj

from app.model.data import refs

def get_tree(fastaFile):
    msa = TabularMSA.read(refs.get_reference_tree(), constructor=DNA)
    msa.reassign_index(minter='id')
    distance_matrix = DistanceMatrix.from_iterable(msa, metric=hamming, keys=msa.index)
    tree = nj(distance_matrix)
    return tree