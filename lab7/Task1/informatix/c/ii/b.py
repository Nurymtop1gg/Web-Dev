x=int(input())
i=2
res=x
while i <x:
    if x%i==0:
        res=i
        break
    i+=1

print(res)