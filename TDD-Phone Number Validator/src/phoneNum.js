const phoneNumChecker = (number)=>{
    const numArr = number.split("")
    if (number.length < 10){
        return false;  
    }
    if(number.length >=10){
        let noSpaces = number.replace(/\s+/g, "")
        noSpaces = noSpaces.split("").filter(i=> /\D/.test(i))
        if (noSpaces.length > 0){
            return false;
        }
    }
    if(number.length === 12){
        if ((numArr[3] !== " ") || (numArr[7] !== " ")){
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