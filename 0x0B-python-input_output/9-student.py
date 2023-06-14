#!/usr/bin/python3

"""Student class"""


class Student:
    """Definition of the Student Class"""
    def __init__(self, first_name, last_name, age):
        """Attributes of the Student Class initialised"""
        self.first_name = first_name
        self.last_name = last_name
        self.age = age

    def to_json(self):
        """Retrieve the dictionary representation of the class instance"""
        return self.__dict__
