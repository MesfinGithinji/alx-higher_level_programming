#!/usr/bin/python3
"""Defines a base geometry class"""


class BaseGeometry:
    """This is a base geometry class"""

    def area(self):
        """This method raises an exception once implemented"""
        raise Exception("area() is not implemented")

    def integer_validator(self, name, value):
        """This method checks for a value and type error
        """
        if type(value) != int:
            raise TypeError("{} must be an integer".format(name))
        if value <= 0:
            raise ValueError("{} must be greater than 0".format(name))
