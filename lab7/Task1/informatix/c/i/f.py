x = int(input())
res =0
while x>0:
    res *= 10
    some = x%10
    x//=10
    res +=some

print(res)
