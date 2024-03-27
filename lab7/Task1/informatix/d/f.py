x = int(input())
input_string = input()
my_list = input_string.split()
cnt=0
for i in range(1,x-1):
    if int(my_list[i])>int(my_list[i-1]) and int(my_list[i])>int(my_list[i+1]):
        cnt+=1

print(cnt)