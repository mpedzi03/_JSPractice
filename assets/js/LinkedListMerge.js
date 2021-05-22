/*
var mergeTwoLists = function(l1, l2) {
    let sentinel =  new ListNode();
    let p0 = sentinel;
    let p1 = l1;
    let p2= l2;
    // using merge sort technique
    while(p1 && p2){
        if(p1.val < p2.val){
            p0.next = p1;
            p1 = p1.next;
        }
        else{
            p0.next = p2;
            p2 = p2.next;
        }
        p0 = p0.next;
    }
    // since p1 or p2 may have some node remaining
    p0.next = p1 || p2;
    return sentinel.next;
};
*/


// My technique
/*
 var mergeTwoLists = function(l1, l2) {
    const arrL1 = []
    const arrL2 = []

    while (l1 !== null) {
        arrL1.push(l1.val)
        l1 = l1.next
    }
    
    while (l2 !== null) {
        arrL2.push(l2.val)
        l2 = l2.next
    }

    const newArray = mergeArrays(arrL1, arrL2)
    if (!newArray.length) return l1
    
    let newNode, prevNode, leadingNode

    for (let i = 0; i < newArray.length; i++) {
        newNode = new ListNode(newArray[i], undefined)

        if (prevNode) {
            prevNode.next = newNode
            prevNode = prevNode.next
        } else {
            prevNode = newNode
            leadingNode = newNode
        }        
    }
    
    return leadingNode
};

function mergeArrays(a1, a2) {
    const mergedArr = []
    let index1 = 0
    let index2 = 0
    
    while (mergedArr.length < (a1.length + a2.length)) {
        let arr1depleted = index1 >= a1.length
        let arr2depleted = index2 >= a2.length
        
        if (!arr1depleted && (arr2depleted || a1[index1] < a2[index2])) {
            mergedArr.push(a1[index1])
            index1++
        } else {
            mergedArr.push(a2[index2])
            index2++
        }
    }
    
    return mergedArr
}
*/