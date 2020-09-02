# Day 19 08.18.2020 Leetcode Plus One
# Given a non-empty array of digits representing a non-negative integer, increment one to the integer.
# The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
# You may assume the integer does not contain any leading zero, except the number 0 itself.
# Example 1:
# Input: [1,2,3]
# Output: [1,2,4]
# Explanation: The array represents the integer 123.

class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        n = len(digits)

        for i in range(n):
            idx = n - 1 - i

            if digits[idx] == 9:
                digits[idx] = 0
            else:
                digits[idx] += 1
                return digits

        return [1] + digits
