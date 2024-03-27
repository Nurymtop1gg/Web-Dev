x = int(input())
input_string = input()
my_list = input_string.split()
cnt=0
for i in my_list:
    if int(i)>0:
        cnt+=1

print(cnt)