# head is first node of the linked list
# simply reads every data of the of the linked list
def printLinkedList(head):
    while True:
        if(head.data != None):
            print(head.data)
        if(head.next == None):
            break
        head = head.next
