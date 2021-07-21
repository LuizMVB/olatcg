import sqlite3
import json

def create_table(table_name, columns = {}):
    conn = sqlite3.connect('OLATCG.db')
    query = f"CREATE TABLE {table_name}("
    for key, value in columns.items():
        query += f"{key} {value}, "
    query = query.strip(', ')
    query += ');'
    try:
        conn.execute(query)
        conn.commit()
        conn.close()
        return {"Message": "Created"}, 201
    except sqlite3.OperationalError:
        conn.close()
        return {"Message": "Internal Server Error"}, 500

def create(table_name, columns:dict, default_values=False):
    conn = sqlite3.connect('OLATCG.db')
    query = ''
    if columns != {}:
        query += f'INSERT INTO {table_name} ('
        for key in columns:
            query += f'{key}, '
        query = query.strip(', ')
        query += ') VALUES ('
        for value in columns.values():
            if isinstance(value, str):
                query += f"'{value}', "
            else:
                query += f"{value}, "
        query = query.strip(', ')
        query += ');'
    else:
        query += 'INSERT INTO ' + table_name + ' DEFAULT VALUES;'
    try:
        print(query)
        conn.execute(query)
        conn.commit()
        query = "SELECT id FROM " + table_name + " ORDER BY id DESC LIMIT 1"
        resp = conn.execute(query).fetchall()
        conn.close()
        id = resp[0][0]
        return {"Message": "Created", "processId": str(id)}, 201
    except:
        conn.close()
        return {"Message": "Internal Server Error", "processId": str()}, 500

def read(table_name, columns=[], conditions=''):
        '''
        if a empty columns' list is given, will return SELECT *
        '''
        conn = sqlite3.connect('OLATCG.db')
        query = ''
        if columns != []:
            query += f'SELECT '
            for att in columns:
                query += f'{att}, '
            query = query.strip(', ')
            query += f' FROM {table_name}'
        else:
            query += f'SELECT * FROM {table_name}'
        if conditions != '':
            query += ' WHERE ' + conditions
        query += ' ORDER BY id DESC;'
        try:
            table = conn.execute(query).fetchall()
            conn.close()
            return json.dumps(table)
        except sqlite3.OperationalError:
            conn.close()
            return {}, 500

def update(table_name, columns, conditions = ''):
        conn = sqlite3.connect('OLATCG.db')
        query = ''
        if columns != {}:
            query += f"UPDATE {table_name} SET "
            for key, value in columns.items():
                if isinstance(value, str):
                    query += f"{key} = '{value}', "
                else:
                    query += f"{key} = {value}, "
            query = query.strip(', ')
            if conditions != '':
                query += f' WHERE {conditions}'
            query += ';'
        try:
            nrows = conn.execute(query).rowcount
            conn.commit()
            conn.close()
            if nrows == 1:
                return {"Message": "Updated Successfully"}, 204
            else:
                return {"Message": "Duplicated or do not exist"}, 500
        except sqlite3.OperationalError:
            return {"Message": "Internal Server Error"}, 500