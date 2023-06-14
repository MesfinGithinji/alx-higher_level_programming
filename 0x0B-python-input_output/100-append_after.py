#!/usr/bin/python3

"""Function to Search and Update"""


def append_after(filename="", search_string="", new_string=""):
    """
     This function inserts a line of text to a file,
     after each line containing a specific string
    """
    with open(filename, "r") as m:
        text = m.readlines()

    with open(filename, "w") as my:
        string = ""
        for line in text:
            string += line
            if search_string in line:
                string += new_string
        my.write(string)
