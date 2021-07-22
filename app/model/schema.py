from app.model.dataBase import create_table

def create_schema():
    create_align_table()
    create_homology_search_table()
    create_homology_search_output_table()


def create_align_table():
    columns = {
        'id': 'INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT',
        'aln1': 'TEXT NULL DEFAULT NULL',
        'aln2': 'TEXT NULL DEFAULT NULL',
        'score': 'REAL NULL DEFAULT NULL',
        'similarity': 'REAL NULL DEFAULT NULL',
        'isLoaded': 'BOOLEAN NOT NULL DEFAULT FALSE',
        'aln_type': 'TEXT NULL DEFAULT NULL',
        'erro': 'TEXT NULL DEFAULT NULL'
    }
    create_table('Align', columns)

def create_homology_search_table():
    columns = {
        'id': 'INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT',
        'isLoaded': 'BOOLEAN NOT NULL DEFAULT FALSE',
        'seqFile': 'TEXT NOT NULL',
        'annotatedSeqFile': 'TEXT NULL DEFAULT NULL',
        'erro': 'TEXT NULL DEFAULT NULL',
    }
    create_table('HomologySearch', columns)

def create_homology_search_output_table():
    columns = {
        'id': 'INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT',
        'seq1': 'TEXT NULL DEFAULT NULL',
        'seq2': 'TEXT NULL DEFAULT NULL',
        'aln1': 'TEXT NULL DEFAULT NULL',
        'aln2': 'TEXT NULL DEFAULT NULL',
        'taxonomy': 'TEXT NULL DEFAULT NULL',
        'score': 'REAL NULL DEFAULT NULL',
        'similarity': 'REAL NULL DEFAULT NULL',
        'homologySearchId': 'INTEGER NOT NULL',
        'erro': 'TEXT NULL DEFAULT NULL',
        'outputSeqFile': 'TEXT NULL DEFAULT NULL',
        'FOREIGN KEY (homologySearchId)': 'REFERENCES HomologySearch(id)'
    }
    create_table('HomologySearchOutput', columns)