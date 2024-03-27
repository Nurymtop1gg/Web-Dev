if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())

new_array = []
new_array = sorted(list(set(arr)))
print(new_array[-2])