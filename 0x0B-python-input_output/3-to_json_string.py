#!/usr/bin/python3

"""COnvert to JSON string"""
import json
"""JSON module"""


def to_json_string(my_obj):
    """
     Function returns a JSON object (string) don't manage 
     exceptions if the object can’t be serialized
    """
    return json.dumps(my_obj)
