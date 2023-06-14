#!/usr/bin/python3

"""Convert to a JSON string"""

import json
"""Module needed for convertion"""


def save_to_json_file(my_obj, filename):
    """
    This function writes an Object to a text file,
    in JSON format:
    """
    with open(filename, 'w') as myfile:
        json.dump(my_obj, myfile)
