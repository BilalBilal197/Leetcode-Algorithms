var mergeTwoLists = function(l1, l2) {
    let prehead = { next: null }
    let p = prehead
    let p1 = l1
    let p2 = l2
    while (p1 && p2) {
      let pSel
      if  (p1.val < p2.val) {
        pSel = p1
        p1 = p1.next
      } else {
        pSel = p2
        p2 = p2.next
      }
      p.next = pSel
      p = pSel
    }
  
    p.next = p1 || p2
  
    return prehead.next
  };