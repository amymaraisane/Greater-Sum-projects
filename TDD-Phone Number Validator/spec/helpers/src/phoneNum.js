const phoneNumChecker = (num) =>{
    if (num.length === 10){
        result = /[0-9]{10}/.test(num)
        return result
    }
    return false
}

module.exports = phoneNumChecker