cube = lambda x: x**3

def fibonacci(n):
    if n ==0:
        a=[]
        return a
    a = [None] * n
    a[0] = 0
    if n > 1:
        a[1] = 1
    for i in range(2, n):
        a[i] = a[i-1] + a[i-2]
    return a




if __name__ == '__main__':
    n = int(input())
    print(list(map(cube, fibonacci(n))))