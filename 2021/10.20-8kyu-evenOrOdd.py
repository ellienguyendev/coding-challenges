# Create a function that takes an integer as an argument 
# and returns "Even" for even numbers or "Odd" for odd numbers.

def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"


# another solution: return 'Odd' if number % 2 else 'Even'
# don't need ==, can also write like ternery operation