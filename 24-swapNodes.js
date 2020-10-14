var swapPairs = function(head) {
    const prehead = { next: head }
  
    for (let p = prehead; p.next !== null && p.next.next !== null;) {
      const p1 = p.next
      const p2 = p1.next
      p1.next = p2.next
      p2.next = p1
      p.next = p2
      p = p1
    }
  
    return prehead.next
  };