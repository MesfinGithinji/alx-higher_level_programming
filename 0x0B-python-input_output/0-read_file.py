#!/usr/bin/python3

"""Function reads from a file"""


def read_file(filename=""):
    """Read text from a file and print output"""
    with open(filename) as file:
        content = file.read()
    print(content, end="")
