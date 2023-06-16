#!/usr/bin/python3
"""This module contains a base class for other classes"""


import csv
import json
import os
import turtle


class Base:
    """This is the base class for all other classes in the project"""

    __nb_objects = 0

    def __init_subclass__(self, id=None):
        if id != None:
            self.id = id
        else:
            Base.__nb_objects += 1
            self.id = Base.__nb_objects
            