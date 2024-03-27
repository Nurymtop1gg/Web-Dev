def xor(x, y):
    if x!=y:
        return 1
    else:
        return 0


input_string = input()
my_list = input_string.split()

x=my_list[0]
y=my_list[1]

print(xor(x,y))