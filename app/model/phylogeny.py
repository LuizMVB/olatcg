from skbio import TabularMSA, DNA
from data import sequence_references
from data import refs

msa = TabularMSA.read(refs.get_reference_sequences(), constructor=DNA)
print(msa)

for label in msa.index:
    print(label)