#!/usr/bin/python3

"""Function writes a string from a textfile"""


def write_file(filename="", text=""):
    """
    This function writes a string to a text file
    and returns number of characters written
    """

    with open(filename, 'w') as myfile:
        return myfile.write(text)
