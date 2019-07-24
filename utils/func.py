import datetime
import os.path

def random_name():
    return datetime.datetime.now().strftime("%Y%m%d%H%M%S")

def file_extension(path):
    # print(os.path.splitext(path)[1])
    return os.path.splitext(path)[1]

def now():
    # return datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    return datetime.datetime.now().strftime('%Y-%m-%d %H:%M')

def encryption(num):
    newNum = []

    for i in str(num):
        if int(i):
            newNum.append(str(10 - int(i) * 7 % 10))
        else:
            newNum.append(str(0))

    return int(''.join(newNum))

def decryption(num):
    oldNum = []
    [oldNum.append(str(int(i) * 7 % 10)) for i in str(num)]
    return int(''.join(oldNum))