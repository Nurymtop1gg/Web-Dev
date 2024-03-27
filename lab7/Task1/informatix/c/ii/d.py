def is_power(x):
    if x == 1:
        return "YES"
    i = 2
    while i <= x:
        if i == x:
            return "YES"
        i *= 2
    return "NO"


x = int(input())
print(is_power(x))