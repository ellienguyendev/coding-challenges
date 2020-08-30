# Day 31 08.30.2020 Leetcode Reverse Integer
# Given a 32-bit signed integer, reverse digits of an integer.
# Note:
# Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        if x >= 2**31-1 or x <= -2**31: return 0
        else:
            string = str(x)
            if x >= 0 :
                rvs = string[::-1]
            else:
                temp = string[1:]
                temp2 = temp[::-1]
                rvs = "-" + temp2
            if int(rvs) >= 2**31-1 or int(rvs) <= -2**31: return 0
            else: return int(rvs)
