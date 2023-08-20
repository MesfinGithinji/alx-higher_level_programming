#!/usr/bin/python3

"""
Module that connects python script to a database
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

    Base.metadata.create_all(eng)

    new_object = State(name="Louisiana")
    my_ssn.add(new_object)
    my_ssn.commit()
    print(new_object.id)

    my_ssn.close()
