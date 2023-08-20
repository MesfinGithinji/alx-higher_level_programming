#!/usr/bin/python3
"""
Takes a state name as an argument and lists all cities of that state,
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
        """SELECT * FROM cities
        INNER JOIN states
        ON cities.state_id = states.id
        ORDER BY cities.id"""
    )

    print(", ".join([city[2]
                     for city in cur.fetchall()
                     if city[4] == argv[4]])

          )

    cur.close()

    db.close()
