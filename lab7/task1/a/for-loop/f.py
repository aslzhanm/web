a = input()
b = ""

for i in range(len(a)):
    if (a[-1] == '0'): a = a[:-1]

for i in range(len(a)):
    b = a[i] + b



print(b)