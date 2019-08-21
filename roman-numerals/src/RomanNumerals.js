var toRoman = (arabic)=>{
    if (Math.sign(arabic) !== 1){
        return "Please enter a positive arabic number";
    }
    if (arabic > 3999){
        return "Oops, the Roman Empire ended in 476 CE; this converter ends at 3999";
    }
    var reversed = arabic.toString().split("").reverse();
    var romanNums = reversed.map((num, index)=>{
        return (getNum(num, index));
    });
    return romanNums.reverse().join("");
}

var getNum = ((num, index)=>{
    var result = "";
    if (num <= 3){
        while (num - 1 >= 0){
            result += conversions[index].ones;
            num--;
        }
    }
    if (num == 4){
        result = conversions[index].four;  
    }
    if (num >=5 && num <= 8){
        result = conversions[index].five;             
        while (num - 5 >0){
            result += conversions[index].ones;
            num --;
        }
    }
    if (num == 9){                 
        result = conversions[index].nine
    }
    return result;
});

var conversions = {
    0: 
    {ones: "I", four: "IV", five: "V", nine: "IX"},

    1: 
    {ones: "X", four: "XL", five: "L", nine: "XC"},

    2: 
    {ones: "C", four: "CD", five: "D", nine: "CM"},

    3: 
    {ones: "M"} 
}




    