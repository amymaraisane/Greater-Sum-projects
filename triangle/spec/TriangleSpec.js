describe('Triangle', function (){

    it('must have sides with length greater than 0', function(){
        expect(isTriangle(0,0,0)).toBe('Error: is not a triangle');
        expect(isTriangle(1000, 1000, 0)).toBe('Error: is not a triangle');
        expect(isTriangle(-0, -0, -0)).toBe('Error: is not a triangle');
        expect(isTriangle(-1,-1,1)).toBe('Error: is not a triangle');
    });
    
    it('must have exactly 3 values for its sides', function(){
        expect(isTriangle(8,9,8,9)).toBe('Error: is not a triangle');
        expect(isTriangle(4,5)).toBe('Error: is not a triangle');
        expect(isTriangle(6)).toBe('Error: is not a triangle');
    });

    it('must have side values of type Number', function(){
        expect(isTriangle(null, null, null)).toBe('Error: is not a triangle');
        expect(isTriangle(true, true, true)).toBe('Error: is not a triangle');
        expect(isTriangle(false, false, false)).toBe('Error: is not a triangle');
        expect(isTriangle(false, true, 7)).toBe('Error: is not a triangle');
        expect(isTriangle("", 1, 2)).toBe('Error: is not a triangle');
        expect(isTriangle({}, {}, {})).toBe('Error: is not a triangle');
        expect(isTriangle([2,4,3])).toBe('Error: is not a triangle');
    });

    it('must have any two sides sum to equal or more than the third side', function(){
        expect(isTriangle(1, 1, 3)).toBe('Error: is not a triangle');
    });

    it('can be equilateral', function(){
        expect(isTriangle(2, 2, 2)).toBe('Equilateral');
        expect(isTriangle((3+2), 5, (6-1))).toBe('Equilateral');
    });

    it('can be isosceles', function(){
        expect(isTriangle(2, 2, 4)).toBe('Isosceles');
        expect(isTriangle((Math.pow(10, -17)*7), 4, 4)).toBe('Isosceles');
    }); 

    it('can be scalene', function(){
        expect(isTriangle(0.5, 1, 1.2)).toBe('Scalene');
        expect(isTriangle((Math.pow(10, 17)), (Math.pow(10, 17)*9), (Math.pow(10, 17)*9.5))).toBe('Scalene');
    });
});
