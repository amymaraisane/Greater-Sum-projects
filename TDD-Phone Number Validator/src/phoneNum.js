const phoneNumChecker = (number)=>{
    const numArr = number.split("")
    const numberDigits = parseInt(number, 10)
    result = /[0-9]/.test(numberDigits)
    return result
}