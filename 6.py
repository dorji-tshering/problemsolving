input_ = ""
n = input()
input_ += n

for i in range(int(n)):
    input_ += ' ' + input()


def processData(dat):
    
    queue = []
    iterable = dat.split(' ')
    data = list(map(lambda a: int(a), iterable))    
    n = int(data[0])
    data.pop(0)   
    j = 0
    for i in range(n):
        if(data[j] == 1):
            queue.append(data[j+1])
            j += 1
        if(data[j] == 2):
            queue.pop(0)
        if(data[j] == 3):
            print(queue[0])
        j += 1
        
processData(input_)