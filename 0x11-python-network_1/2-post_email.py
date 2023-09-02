#!/usr/bin/python3
"""Sends a POST request to the passed URL with email as a parameter
   Displays the body of the response.
"""
import sys
import urllib.parse
import urllib.request


if __name__ == "__main__":
    url = sys.argv[1]
    Key_value = {"email": sys.argv[2]}
    data = urllib.parse.urlencode(Key_value).encode("ascii")

    req = urllib.request.Request(url, data)
    with urllib.request.urlopen(req) as response:
        print(response.read().decode("utf-8"))
