def count_digit_occurrences(x, d):
    count = 0
    while x > 0:
        if x % 10 == d:
            count += 1
        x //= 10
    return count


x = int(input())
d = int(input())


result = count_digit_occurrences(x, d)
print(result)
