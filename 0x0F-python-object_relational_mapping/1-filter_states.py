#!/usr/bin/python3

"""
script that lists all states with a name starting with N
"""
if __name__ == "__main__":
    import MySQLdb
    from sys import argv

    db = MySQLdb.connect(
        host="localhost",
        port=3306,
        user=argv[1],
        password=argv[2],
        db=argv[3]
    )

    cur = db.cursor()
    cur.execute(
        """SELECT * FROM states WHERE name LIKE
        BINARY 'N%'ORDER BY states.id ASC
        """
        )

    my_data = cur.fetchall()

    for data in my_data:
        print(data)

    cur.close()

    db.close()
