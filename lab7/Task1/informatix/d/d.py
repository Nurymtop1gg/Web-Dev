x = int(input())
input_string = input()
my_list = input_string.split()
cnt = -1
a = -1000e9
for i in my_list:
    if int(i) > a:
        cnt += 1
    a = int(i)
print(cnt)
