// High memory usage

/*
var deleteDuplicates = function(head) {
    const arr = []
    const tracker = {}

    while(head) {
        if (!tracker.hasOwnProperty(head.val)) {
            arr.push(head.val)
            tracker[head.val] = 1
        }

        head = head.next
    }

    if (!arr.length) return head

    let prevNode, newNode, headNode

    for (let i = 0; i < arr.length; i++) {
        newNode = new ListNode(arr[i])

        if (prevNode) {
            prevNode.next = newNode
            prevNode = prevNode.next
        } else {
            prevNode = newNode
            headNode = newNode
        }
    }

    return headNode
};
*/

// More efficient way
/*
  let curr=head

  if(!head) return head
  while(curr.next){
      if(curr.val===curr.next.val){
          curr.next=curr.next.next
      }else{
          curr=curr.next
      }
  }
  return head
*/