def power(a, b):
    sum = 1
    for i in range(int(b)):
        sum *= a
        
    
    return sum

a, b = map(float, input().split())

print(power(a, b))