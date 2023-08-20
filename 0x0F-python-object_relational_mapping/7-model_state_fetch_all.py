#!/usr/bin/python3

"""
connect to db,establish session,query data
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

    for state in my_ssn.query(State).order_by(State.id):
        print("{}: {}".format(state.id, state.name))

    my_ssn.close()
