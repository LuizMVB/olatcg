from app.model.dataBase import create_table

def create_schema():
    create_align_table()


def create_align_table():
    columns = {
        'id': 'INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT',
        'aln1': 'TEXT NOT NULL',
        'aln2': 'TEXT NOT NULL',
        'score': 'REAL NOT NULL',
        'similarity': 'REAL NOT NULL'
    }
    create_table('Align', columns)