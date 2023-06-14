#!/usr/bin/python3

"""Function appends to a file"""


def append_write(filename="", text=""):
    """
    Appends a string at end of a file
    and returns number of characters added
    """
    with open(filename, 'a') as myfile:
        return myfile.write(text)
