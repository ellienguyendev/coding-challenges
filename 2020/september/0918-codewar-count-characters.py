#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Sep 18 16:46:59 2020

@author: Ellie
"""
# The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
# What if the string is empty? Then the result should be empty object literal, {}.

def count(string):
    characters = {}
    
    for i in string:
        if i in characters:
            characters[i] += 1
        else:
            characters[i] = 1
    return characters
    
count("")
            