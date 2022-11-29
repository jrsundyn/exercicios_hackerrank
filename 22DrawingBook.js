function pageCount(n, p) {
    
    const turnsLefToRight = Math.floor(n/2)
    console.log(turnsLefToRight)
    const pageLeftToRight = Math.floor(p/2)
    console.log (pageLeftToRight)
    const pageRightTOleft = Math.floor(turnsLefToRight - pageLeftToRight)
    console.log(pageRightTOleft)
    
    
    
    
    if (pageLeftToRight < pageRightTOleft){
        return pageLeftToRight
    } else {
        return pageRightTOleft
    }



}
console.log(pageCount(6,5))