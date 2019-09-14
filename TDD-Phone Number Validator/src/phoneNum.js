const phoneNumChecker = (num) =>{
    if(isNaN(Number(num))){
        return false
    }
    else if (num.length === 10){
        return true
    }
    return false
}