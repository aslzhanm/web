import math

a = int(input())
b = int(input())

for i in range(a, b+1):
    c = math.isqrt(i)
    if(c*c == i): print(i, end=' ')