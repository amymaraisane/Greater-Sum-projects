const phoneNumChecker = (number)=>{
    if (number.length === 10){
        let result = /[0-9]{10}/.test(number)
        return result
    }
    if (number.length >=12){
        let result = /\(?[0-9]{3}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{4}/.test(number)
        return result
    }
    return false
}


//need to escape opening and closing parenthasis
//otherwise ( signals the start of a capturing (can be used to extract data) or noncapturing group

//must adjust number.length to >= 12