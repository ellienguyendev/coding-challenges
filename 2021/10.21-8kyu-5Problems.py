# Very simple, given a number, find its opposite.
def opposite(number):
    return number * -1


# Write a function to split a string and convert it into an array of words. 
def string_to_array(s):
    return s.split(' ')


# Your task is to make two functions, max and min 
# that take a(n) array/vector of integers list as input and outputs, respectively, 
# the largest and lowest number in that array/vector.
def minimum(arr):
    return min(arr)

def maximum(arr):
    return max(arr)

# ****** no need for Math. in python. min/max(iteratable)
# ******************************************************


# Timmy & Sarah think they are in love, but around where they live, 
# they will only know once they pick a flower each. If one of the flowers has an even number of petals 
# and the other has an odd number of petals it means they are in love.
# Write a function that will take the number of petals of each flower 
# and return true if they are in love and false if they aren't.

def lovefunc( flower1, flower2 ):
    f1Result = True if flower1 % 2 == 0 else False
    f2Result = True if flower2 % 2 == 0 else False
    if f1Result and not f2Result or not f1Result and f2Result:
        return True
    else:
        return False

# ****** couldve done: return (flower1+flower2)%2
# ****** python only does two equal signs for comparisons
# ****** don't need == 0 for modulus. implied true or false if == 0
# ****** booleans are capitalized
# ****** != in JS is ~not~
# ******************************************************


# I'm new to coding and now I want to get the sum of two arrays...
# actually the sum of all their elements. I'll appreciate for your help
# P.S. Each array includes only integer numbers. Output is a number too.

def array_plus_array(arr1,arr2):
    return sum(arr1) + sum(arr2)