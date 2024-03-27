x = int(input())
input_string = input()
my_list = input_string.split()
a = int(my_list[0])
bol=True

for i in range(1,x):
    if (a < 0 and int(my_list[i]) < 0) or (a > 0 and int(my_list[i]) > 0):
        bol = False
        break
    a = int(my_list[i])


if bol:
    print("NO")
else:
    print("YES")
