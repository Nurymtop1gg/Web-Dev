x = int(input())
input_string = input()
my_list = input_string.split()
for i in my_list:
    if int(i)%2==0:
        print(i,end=" ")
