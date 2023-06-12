#!/usr/bin/python3
"""Inherits from baseGeometry"""
BaseGeometry = __import__('7-base_geometry').BaseGeometry


class Rectangle(BaseGeometry):
    """Defines a rectangle and inherits from BaseGeometry"""

    def __init__(self, width, height):
        """Intializes the Rectangle attributes
        """
        
        super().integer_validator("width", width)
        self.__width = width
        super().integer_validator("height", height)
        self.__height = height


    def area(self):
        """"Returns area of a rectangle."""
        return self.__width * self.__height

    def __str__(self):
        """Returns the formated representation of the recatngle """
        string = "[" + str(self.__class__.__name__) + "] "
        string += str(self.__width) + "/" + str(self.__height)
        return string
