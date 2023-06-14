#!/usr/bin/python3

"""FUnction of Pascal Triangle"""


def pascal_triangle(n):
    """
    Returns a list of lists of integers representing the Pascal’s triangle
    Returns an empty list if n <= 0
    """
    tri = []
    if n <= 0:
        return tri
    if n == 0:
        return [[1]]

    tri = [[1]]
    for i in range(n-1):
        tri.append([a+b for a, b in zip([0] + tri[-1], tri[-1] + [0])])
    return tri
