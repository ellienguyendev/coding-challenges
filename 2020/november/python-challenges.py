# It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
# Return the average of the given array rounded down to its nearest integer.
# The array will never be empty.

import functools 
import math

def get_average(marks):
    total = functools.reduce(lambda a,b : a+b,marks)
    return math.floor(total/len(marks))

###########################################################################

# Description:
# Complete the solution so that it reverses all of the words within the string passed in.

# Example:

# reverseWords("The greatest victory is that which requires no battle")
# // should return "battle no requires which that is victory greatest The"

def reverseWords(s):
    words = s.split(' ')
    rev = reversed(words)
    return ' '.join(rev)

###########################################################################

# Given an array of integers , Find the maximum product obtained from 
# multiplying 2 adjacent numbers in the array.

def adjacent_element_product(list_nums):
    return max(a*b for a, b in zip(list_nums, list_nums[1:]))
