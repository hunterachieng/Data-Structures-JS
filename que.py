# def minimum_bribes(queue):
#     chaotic = False
#     bribes = 0
#     num = 0

#     for item in queue:               
#          if item-(queue.index(item)+1) > 2:
#             chaotic = True
#             j = item -2
#             if j < queue.index(item):
#                 j+=1
#                 if queue.index(j) > queue.index(item):
#                     bribes += 1
#     if chaotic == True:
#         print("Too chaotic")
#     else:
#         print(bribes)
# minimum_bribes([5,2,1,3,4])
# minimum_bribes([2,1,5,4])

def minimum_bribes(queue):
    chaotic = False
    bribes = 0
    queue = [num-1 for num in queue]

    for a, num in enumerate(queue):
        if num - a > 2:
             chaotic = True
        for j in range(max(num-1, 0),a):
            if queue[j] > num:
                bribes +=1
 
    if chaotic == True:
        print("Too chaotic")
    else:
        print(bribes)
minimum_bribes([1,3,2,4,5])
minimum_bribes([1,2,5,3,4])
        
