var removeNthFromEnd = function(head, n) {
    let p1 = head
    while (p1 && n--) {
      p1 = p1.next
    }
  
    if (!p1) { return n ? head : head.next }
  
    let p2 = head
    while (p1.next) {
      p1 = p1.next
      p2 = p2.next
    }
  
    p2.next = p2.next.next
  
    return head
  };