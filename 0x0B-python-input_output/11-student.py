#!/usr/bin/python3

"""Define a Student class"""


class Student:
    """Definition of the Student Class"""
    def __init__(self, first_name, last_name, age):
        """Attributes of the Student Class initialised"""
        self.first_name = first_name
        self.last_name = last_name
        self.age = age

    def to_json(self, attrs=None):
        """Retrieve the dictionary representation of the class instance"""
        if attrs is None:
            return self.__dict__

        else:
            d = {}
            for attr in attrs:
                if hasattr(self, attr):
                    d[attr] = getattr(self, attr)
            return d

    def reload_from_json(self, json):
        """Replaces all attributes of an instance of the class"""
        for keys in json:
            setattr(self, keys, json[keys])
