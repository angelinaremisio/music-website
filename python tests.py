def is_shuffled(shuffled):
    if(shuffled == True):
        print("true")
        return False
    else:
        print("FALSE")
        print("shuffled")
        return True

shuffled = False
shuffled = is_shuffled(shuffled)
for i in range(10):
    print(shuffled)
    shuffled = is_shuffled(shuffled)
    
