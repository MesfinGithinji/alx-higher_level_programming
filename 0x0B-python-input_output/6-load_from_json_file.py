#!/usr/bin/python3

"""Creates an object from a JSON"""

import json
"""Module needed for convertion"""


def load_from_json_file(filename):
    """A function that creates an Object from a JSON """
    with open(filename) as myfile:
        return json.load(myfile)
