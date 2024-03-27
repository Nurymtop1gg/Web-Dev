x = int(input())
res =0
i = 1
while i * i <= x:
        if x ==1:
            res =1
            break
        if x % i == 0:
            res += 2
        i += 1

        if i * i == x:
            res -= 1

print(res)