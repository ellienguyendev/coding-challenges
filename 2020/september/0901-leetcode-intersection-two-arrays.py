# Day 33 09.01.2020 Leetcode Intersection of Two Arrays
# Given two arrays, write a function to compute their intersection.
# Example 1:
# Input: nums1 = [1,2,2,1], nums2 = [2,2]
# Output: [2,2]

class Solution(object):
    def intersect(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        result = []
        n1 = nums1
        n2 = nums2

        if len(n1) > len(n2):
            nums1 = n2
            nums2 = n1

        for i in range(len(nums2)):
            if nums2[i] in nums1:
                nums1.remove(nums2[i])
                result.append(nums2[i])

        return result
