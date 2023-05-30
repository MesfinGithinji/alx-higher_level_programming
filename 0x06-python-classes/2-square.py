#!/usr/bin/python3

"""define the class square"""


class Square:
    """
    class square  with size as private
    and check type
    """
    def __init__(self, size=0):
        if type(size) is not int:
            raise TypeError("size must be an integer")
        if size < 0:
            raise ValueError("size must be >= 0")

        self.__size = size
