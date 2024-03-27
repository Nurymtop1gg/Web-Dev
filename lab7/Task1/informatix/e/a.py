def min_num(a,b,c,d):
    first=min_2(a,b)
    second=min_2(c,d)
    return min_2(first,second)

def min_2(a,b):
    if a<b:
        return a
    else:return b

input_string = input()
my_list = input_string.split()
a = my_list[0]
b = my_list[1]
c = my_list[2]
d = my_list[3]

print(min_num(a,b,c,d))