s = input()

res = 0
p = 1

for digit in s[::-1]:
    res += int(digit) * p
    p *= 2

print(res)