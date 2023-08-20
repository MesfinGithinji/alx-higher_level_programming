#!/usr/bin/python3
"""
Takes in an argument and displays all values in the states table
"""

if __name__ == "__main__":

    import MySQLdb
    from sys import argv

    db = MySQLdb.connect(
        host='localhost',
        user=argv[1],
        password=argv[2],
        db=argv[3],
        port=3306
        )

    cur = db.cursor()

    cur.execute(
        """
        SELECT * FROM states  WHERE name LIKE BINARY '{}'
        ORDER BY states.id ASC
        """.format(argv[4])
        )

    res = cur.fetchall()

    for row in res:
        print(row)

    cur.close()

    db.close()
