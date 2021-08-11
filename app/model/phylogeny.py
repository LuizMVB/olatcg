from skbio import DNA, TabularMSA, DistanceMatrix
from skbio.sequence.distance import hamming
from skbio.tree import nj
from app.model.dataBase import create, read, update
import skbio.io
import io

import json
import tempfile

table_name = "PhylogeneticTree"

def create_tree(annotated_seq_file):
    ant_str_file = format_annotated_seq_file(annotated_seq_file)
    with tempfile.NamedTemporaryFile(mode="w+t") as fp:
        fp.write(ant_str_file)
        fp.seek(0)
        msa = TabularMSA.read(fp.name, constructor=DNA, format="fasta")
        msa.reassign_index(minter='id')
        distance_matrix = DistanceMatrix.from_iterable(msa, metric=hamming, keys=msa.index)
    
    nwk_format = nj(distance_matrix)
    columns = {
        'annotatedSeqFile': ant_str_file,
        'nwkFormat': str(nwk_format)[:-2],
    }
    msg, status = create(table_name=table_name, columns=columns)
    return msg, status

def get_trees():
    return generate_trees_dto(read(table_name))

def format_annotated_seq_file(annotated_seq_file):
    str_seq = ""
    slice_number = 100
    for line in annotated_seq_file.readlines():
        item = line.decode("utf-8")
        if item[0] != ">":
            n_bases = len(item) - 1
            if n_bases - 1 < slice_number:
                slice_number = n_bases
    annotated_seq_file.seek(0)
    for line in annotated_seq_file.readlines():
        item = line.decode("utf-8")
        if item[0] != ">":
            str_seq += item[:slice_number] + "\n"
        else:
            str_seq += item
    return str_seq

def generate_trees_dto(trees_list):
    dto = {}
    for tree in json.loads(trees_list):
        id = tree[0]
        dto[id] = {
            'annotatedSeqFile': tree[1],
            'nwkFormat': tree[2],
        }
    return dto