#!/usr/bin/python3

"""A class that defines a rectangle"""


class Rectangle:
    """Rectangle class attributes"""
    def __init__(self, width=0, height=0):
        self.height = height
        self.width = width

    @property
    def width(self):
        """Return width attribute"""
        return self.__width

    @width.setter
    def width(self, value):
        """Set the width attribute"""
        if type(value) is not int:
            raise TypeError("width must be an integer")
        if value < 0:
            raise ValueError("width must be >= 0")

        self.__width = value

    @property
    def height(self):
        """Return height attribute"""
        return self.__height

    @height.setter
    def height(self, value):
        """Set the height attribute"""
        if type(value) is not int:
            raise TypeError("height must be an integer")
        if value < 0:
            raise ValueError("height must be >= 0")

        self.__height = value

    def area(self):
        """Return area of rectangle"""
        return self.height * self.width

    def perimeter(self):
        """Return perimeter of rectangle"""
        if self.__height == 0 or self.__width == 0:
            return 0
        return 2 * (self.height + self.width)