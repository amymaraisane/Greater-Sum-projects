const phoneNumChecker = (number)=>{
    const numArr = number.split("")
    if (number.length < 10){
        return false;  
    }
    if(number.length >=10){
        let nonNumeric = numArr.filter(i=> /\D/.test(i))
        if (nonNumeric.length > 0){
            return false;
        }
    }
    if(number.length === 12){
        if (numArr[3] !== " " || numArr[7] !== " "){
            debugger;
            return false
        }
    }
    //     //write the long if statement, then refactor
    //     checkSpot(numArr[3]) || checkSpot(numArr[7]) === false ? false : true  
    return true;
}

//write the long if statement, then refactor

// const checkSpot = value =>{
//     if (value !== " " || value !== "-"){
//         return false
//     }
//     return true
// }