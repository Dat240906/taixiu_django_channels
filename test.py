list_ = [-1] * 16

while True:
    num = int(input('num: '))
    list_ = [num] + list_[:-1]  
    print(list_[::-1])