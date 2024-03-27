def stepen(a, b):
    return float(a)**int(b)

input_string = input()
my_list = input_string.split()
a = my_list[0]
b = my_list[1]
print(stepen(a,b))
