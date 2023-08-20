#!/usr/bin/python3

"""
Script that prints all City objects from the database
"""
from sys import argv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from model_state import Base, State
from model_city import City

if __name__ == "__main__":

    eng = create_engine(
        'mysql+mysqldb://{}:{}@localhost/{}'
        .format(argv[1], argv[2], argv[3]),
        pool_pre_ping=True
    )

    db_session = sessionmaker(bind=eng)
    my_ssn = db_session()

    for state, city in my_ssn.query(State, City).filter(
            State.id == City.state_id).all():
        print("{}: ({}) {}".format(state.name, city.id, city.name))

    my_ssn.close()
