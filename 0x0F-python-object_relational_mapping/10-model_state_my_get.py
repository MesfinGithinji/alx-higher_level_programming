#!/usr/bin/python3

"""
prints the State object with the name passed as argument
"""
from sys import argv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from model_state import Base, State

if __name__ == "__main__":

    eng = create_engine(
        'mysql+mysqldb://{}:{}@localhost/{}'
        .format(argv[1], argv[2], argv[3]),
        pool_pre_ping=True
    )

    db_session = sessionmaker(bind=eng)
    my_ssn = db_session()

    for state in my_ssn.query(State):
        if argv[4] == state.name:
            print("{}".format(state.id))
            break
    else:
        print("Not found")

    my_ssn.close()
