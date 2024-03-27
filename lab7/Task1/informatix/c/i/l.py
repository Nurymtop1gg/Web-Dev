x = int(input())
power=0
res=0
while x > 0:
    if x%10==1:
        res+=2**power
    power+=1
    x//=10

print(res)