#!/usr/bin/python3

"""This Function converts from JSON back to python """

import json
"""Module needed for convertion"""


def from_json_string(my_str):
    """
     Function returns an object represented by a JSON string
    """
    return json.loads(my_str)
