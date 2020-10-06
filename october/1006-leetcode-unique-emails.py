#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Oct  6 15:50:11 2020

@author: Ellie
"""

# Every email consists of a local name and a domain name, separated by the @ sign.

# For example, in alice@leetcode.com, alice is the local name, and leetcode.com is the domain name.

# Besides lowercase letters, these emails may contain '.'s or '+'s.

# If you add periods ('.') between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name.  For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.  (Note that this rule does not apply for domain names.)

# If you add a plus ('+') in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered, for example m.y+name@email.com will be forwarded to my@email.com.  (Again, this rule does not apply for domain names.)

# It is possible to use both of these rules at the same time.

# Given a list of emails, we send one email to each address in the list.  How many different addresses actually receive mails? 

# Example 1:

# Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
# Output: 2
# Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails

def numUniqueEmails(emails):
    """
    :type emails: List[str]
    :rtype: int
    """

    local_names = []
    dup_list = []
    
    for e in emails:
        temp = e.split('@')
        if '+' not in temp[0] and '.' not in temp[0]:
            local_names.append(e)
        elif '+' in temp[0]:
            ignore = temp[0].split('+')
            if '.' in ignore[0]:
                final_string = ignore[0].replace('.','')
                local_names.append(final_string + '@' + temp[1])
            else:
                local_names.append(ignore[0] + '@' + temp[1])
        elif '.' in temp[0]:
            final_string = temp[0].replace('.','')
            local_names.append(final_string + '@' + temp[1])

    
    for e in local_names:
        if e not in dup_list:
            dup_list.append(e)
    
    print(len(dup_list), local_names)


numUniqueEmails(["testemail@leetcode.com","testemail1@leetcode.com","testemail+david@lee.tcode.com"])

# Leetcode optimized 

class Solution(object):
    def numUniqueEmails(self, emails):
        seen = set()
        for email in emails:
            local, domain = email.split('@')
            if '+' in local:
                local = local[:local.index('+')]
            seen.add(local.replace('.','') + '@' + domain)
        return len(seen)