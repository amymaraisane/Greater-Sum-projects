const phoneNumChecker = (number)=>{
    if (number.length === 10){
        let result = /[0-9]{10}/.test(number)
        return result
    }
    if (number.length === 12){
        let result = /[0-9]{3}[\s][0-9]{3}[\s][0-9]{4}/.test(number)
        debugger;
        return result
    }
    return false
}