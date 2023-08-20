#!/usr/bin/python3
"""
Handle SQL injection attack
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
        "SELECT * FROM states  WHERE name=%s ORDER BY id", (argv[4], ))

    my_data = cur.fetchall()

    for row in my_data:
        print(row)

    cur.close()

    db.close()
