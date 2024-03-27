v=int(input())
t=int(input())
s=v*t
if s>0:
    print(s%109)
elif s==0:
    print(0)
else:
    print(s%109)