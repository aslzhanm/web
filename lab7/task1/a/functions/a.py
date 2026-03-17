

def min(a, b, c, d):
    res = a
    if b < res:
        res = b
    if c < res:
        res = c 
    if d < res:
        res = d 

    return res 

a, b, c, d = map(int, input().split())

print(min(a, b, c, d))