# game of two stacks----ultimate logic required
gameCount = int(input())
first = input()
second = input()
third = input()

# variable extraction
first_ = first.split(' ')
second_ = second.split(' ')
third_ = third.split(' ')

data = list(map(lambda x: int(x), first_))
A = list(map(lambda x: int(x), second_))
B = list(map(lambda x: int(x), third_))

limit = data[2]

# game function
def gameOfStacks(g, x, a, b):        
    for i in range(g):
        i = 0
        j = 0
        count = 0
        sum_ = 0
    # find the count from the first stack 
        while(i<len(a) and sum_+a[i] <= x):
            sum_ += a[i]          
            i += 1
        count = i
    # add each element from the second stack to the last sum from the first stack
    # if it exceeds x, subtract the latest removed element from first stack
    # i+j will give you the exact count of how many integers are involved in the sum
        while (j<len(b) and i>=0):
            sum_ += b[j]
            j += 1
            while(sum_ > x and i>0):
                i -= 1
                sum_ -= a[i]
        if(i+j > count and sum_ <= x):
            count = i+j
        print(count)  
gameOfStacks(gameCount, limit, A, B)



