a=int(input())
b=int(input())+1
for i in range(a,b):
    for t in range(i):
        if t*t == i:
            print(i)