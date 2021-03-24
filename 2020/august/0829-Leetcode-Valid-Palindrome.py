#Day 30 08.29.2020 Leetcode Valid Palindrome
# Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
# Note: For the purpose of this problem, we define empty string as valid palindrome.

class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """

        i, j = 0, len(s) - 1

        while i < j:
            while i < j and not s[i].isalnum():
                i += 1
            while i < j and not s[j].isalnum():
                j -= 1

            if i < j and s[i].lower() != s[j].lower():
                return False

            i += 1
            j -= 1

        return True
