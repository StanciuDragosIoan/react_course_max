/*
    we created a fake id property for each person 

    the index key is not good because if an element is deleted, all the other
    elements will receive a new index so React still renders the whole list

    the face id property we set will work because if 1 changes, the other ones 
    do not

    a key is used to tell react which element it needs to update (so it does
    not update all the DOM)
*/
