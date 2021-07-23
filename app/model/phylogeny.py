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
    with tempfile.NamedTemporaryFile() as fp:
        fp.write(bytes(ant_str_file, "utf-8"))
        msa = TabularMSA.read(fp.name, constructor=DNA,  format='fasta')
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

## Muito código desnecessário, melhorar depois
def format_annotated_seq_file(annotated_seq_file):
    seq = str(annotated_seq_file.readline()).strip("b'").replace("\\n", "\n")
    seqsInFile = []
    while seq:
        seqsInFile.append(seq)
        seq = str(annotated_seq_file.readline()).strip("b'").replace("\\n", "\n")
    seqsInFile[len(seqsInFile)-1] = seqsInFile[len(seqsInFile)-1][0:-2]
    seqsInFile2 = ""
    slice_number = 30
    for item in io.StringIO("".join(seqsInFile)).readlines():
        if item[0] == ">":
            seqsInFile2 = seqsInFile2 + item
        else:
            seqsInFile2 = seqsInFile2 + item[:slice_number] + "\n"
    return seqsInFile2

def generate_trees_dto(trees_list):
    dto = {}
    for tree in json.loads(trees_list):
        id = tree[0]
        dto[id] = {
            'annotatedSeqFile': tree[1],
            'nwkFormat': tree[2],
        }
    return dto