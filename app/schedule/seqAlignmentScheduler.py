import threading
from app.model import seqAlignment
from app.model.dataBase import create, update

tableName = "Align"

def dnaLocalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty):
    msg, status = create(tableName, {}, default_values=True)
    threading.Thread(target=processDNALocalAlignment, args=(msg['processId'], seq1, seq2, gap_open_penalty, gap_extend_penalty)).start()
    return msg, status

def processDNALocalAlignment(id, seq1, seq2, gap_open_penalty, gap_extend_penalty):
    columns = seqAlignment.dnaAlign(seq1, seq2, float(gap_open_penalty), float(gap_extend_penalty), True)
    save(id, columns, 'dna_local')

def rnaLocalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty):
    msg, status = create(tableName, {}, default_values=True)
    threading.Thread(target=processRNALocalAlignment, args=(msg['processId'], seq1, seq2, gap_open_penalty, gap_extend_penalty)).start()
    return msg, status

def processRNALocalAlignment(id, seq1, seq2, gap_open_penalty, gap_extend_penalty):
    columns = seqAlignment.rnaAlign(seq1, seq2, float(gap_open_penalty), float(gap_extend_penalty), True)
    save(id, columns, 'rna_local')

def proteinLocalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty):
    msg, status = create(tableName, {}, default_values=True)
    threading.Thread(target=processProteinLocalAlignment, args=(msg['processId'], seq1, seq2, gap_open_penalty, gap_extend_penalty)).start()
    return msg, status

def processProteinLocalAlignment(id, seq1, seq2, gap_open_penalty, gap_extend_penalty):
    columns = seqAlignment.proteinAlign(seq1, seq2, float(gap_open_penalty), float(gap_extend_penalty), True)
    save(id, columns, 'protein_local')

def dnaGlobalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty):
    msg, status = create(tableName, {}, default_values=True)
    threading.Thread(target=processDNAGlobalAlignment, args=(msg['processId'], seq1, seq2, gap_open_penalty, gap_extend_penalty)).start()
    return msg, status

def processDNAGlobalAlignment(id, seq1, seq2, gap_open_penalty, gap_extend_penalty):
    columns = seqAlignment.dnaAlign(seq1, seq2, float(gap_open_penalty), float(gap_extend_penalty))
    save(id, columns, 'dna_global')

def rnaGlobalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty):
    msg, status = create(tableName, {}, default_values=True)
    threading.Thread(target=processRNAGlobalAlignment, args=(msg['processId'], seq1, seq2, gap_open_penalty, gap_extend_penalty)).start()
    return msg, status

def processRNAGlobalAlignment(id, seq1, seq2, gap_open_penalty, gap_extend_penalty):
    columns = seqAlignment.rnaAlign(seq1, seq2, float(gap_open_penalty), float(gap_extend_penalty))
    save(id, columns, 'rna_global')

def proteinGlobalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty):
    msg, status = create(tableName, {}, default_values=True)
    threading.Thread(target=processProteinGlobalAlignment, args=(msg['processId'], seq1, seq2, gap_open_penalty, gap_extend_penalty)).start()
    return msg, status

def processProteinGlobalAlignment(id, seq1, seq2, gap_open_penalty, gap_extend_penalty):
    columns = seqAlignment.proteinAlign(seq1, seq2, float(gap_open_penalty), float(gap_extend_penalty))
    save(id, columns, 'protein_global')

def save(id, columns, aln_type):
    if id:
        columns['isLoaded'] = 'TRUE'
        columns['aln_type'] = aln_type
        msg, status = update(tableName, columns, conditions='id = ' + id)
    else:
        msg = "Failed to create record with default values"
        status = 500
    print("Status returned for the Thread {0}: {1} - {2}\nResponse: {3}".format(
            threading.current_thread().name, status, msg, columns))
    