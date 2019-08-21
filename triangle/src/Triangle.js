function isTriangle(side1, side2, side3){
    if ((!formsTriangle(side1, side2, side3)) || (arguments.length !== 3)){
        return ('Error: is not a triangle');
    }
    if (isEquilateral(side1, side2, side3)){
        return ('Equilateral');
    }
    if (isIsosceles(side1, side2, side3)){
        return ('Isosceles');
    } 
    return ('Scalene');
}

var formsTriangle = function(side1, side2, side3){
    return ((side1 > 0 && side2 > 0 && side3 > 0) &&
        (side1 !== true) &&
        (side1 + side2 >= side3) &&
        (side2 + side3 >= side1) &&
        (side3 + side1 >= side2));
}

var isEquilateral = function(side1, side2, side3){
    return ((side1 === side2) && (side2 === side3));
}

var isIsosceles = function(side1, side2, side3){
    return ((side1 === side2) || (side2 === side3) || (side3 === side1));
}
