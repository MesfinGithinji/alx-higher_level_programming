#!/usr/bin/python3
"""
Module lists all states from the database hbtn_0e_0_usa:
"""

if __name__ == "__main__":

    import MySQLdb
    from sys import argv

    db = MySQLdb.connect(host='localhost', user=argv[1],
                         password=argv[2], db=argv[3], port=3306)

    cur = db.cursor()

    cur.execute("SELECT * FROM states ORDER BY states.id ASC;")

    my_data = cur.fetchall()

    for row in my_data:
        print(row)

    cur.close()

    db.close()
