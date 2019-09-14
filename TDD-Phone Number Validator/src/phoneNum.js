const phoneNumChecker = (number)=>{
    if (number.length === 10){
        let result = /[0-9]{10}/.test(number)
        return result
    }
    if (number.length >=12){
        let result = /\(?[\d]{3}\)?[\s-]?[\d]{3}[\s-]?[\d]{4}/.test(number)
        return result
    }
    return false
}

