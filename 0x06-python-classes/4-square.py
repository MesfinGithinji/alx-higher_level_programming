#!/usr/bin/python3

"""define the class suqare"""


class Square:
    """
    class square with size as  private
    """
    def __init__(self, size=0):
        self.size = size

    @property
    def size(self):
        """return attribute"""
        return self.__size

    @size.setter
    def size(self, value):
        """modify value of attribute"""

        if type(value) is not int:
            raise TypeError("size must be an integer")
        if value < 0:
            raise ValueError("size must be >= 0")

        self.__size = value

    def area(self):
        """returns the suare of size """
        return (self.__size ** 2)
