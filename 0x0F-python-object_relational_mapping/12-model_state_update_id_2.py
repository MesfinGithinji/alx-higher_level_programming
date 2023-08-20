#!/usr/bin/python3

"""
script that changes the name of a State object(update)
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

    state = my_ssn.query(State).filter_by(id=2).first()
    state.name = "New Mexico"
    my_ssn.commit()

    my_ssn.close()
