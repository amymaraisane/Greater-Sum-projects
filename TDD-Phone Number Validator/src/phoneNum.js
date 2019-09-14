const phoneNumChecker = (num) =>{
    if (num.length ===10) {
        let result = /[0-9]{10}/.test(num)
        return result
    }
    return false
}