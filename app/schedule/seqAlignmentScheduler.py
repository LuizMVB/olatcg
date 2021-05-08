import threading
from app.model import seqAlignment
from app.model.dataBase import create

tableName = "Align"

def dnaLocalAlignment(seq1, seq2, gap_open_penalty, gap_extend_penalty):
    columns = seqAlignment.dnaAlign(seq1, seq2, float(gap_open_penalty), float(gap_extend_penalty), True)
    message, status = create(tableName, columns)
    print("Status returned for the Thread {0}: {1} - {2}\nResponse: {3}".format(
        threading.current_thread().name, status, message, columns))
    