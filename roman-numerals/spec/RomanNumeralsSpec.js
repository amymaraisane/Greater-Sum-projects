describe("Roman Numeral Converter", function(){

    it("requires a positive arabic number", function(){
        expect(toRoman(0)).toBe("Please enter a positive arabic number");
    });

    it("only converts numbers less than 4000", function(){
        expect(toRoman(4000)).toBe("Oops, the Roman Empire ended in 476 CE; this converter ends at 3999");
    });

    it("converts 3 to III", function(){
        expect(toRoman(3)).toBe("III");
    });

    it("converts 5 to V", function(){
        expect(toRoman(5)).toBe("V");
    });
  
    it("converts 10 to X", function(){
        expect(toRoman(10)).toBe("X");
    });

    it("converts 11 to XI", function(){
        expect(toRoman(11)).toBe("XI");
    });

    it("converts 14 to XIV", function(){
        expect(toRoman(14)).toBe("XIV");
    });

    it("converts 39 to XXXIX", function(){
        expect(toRoman(39)).toBe("XXXIX");
    });

    it("converts 40 to XL", function(){
        expect(toRoman(40)).toBe("XL");
    });

    it ("converts 100 to C", function(){
        expect(toRoman(100)).toBe("C");
    });

    it ("converts 297 to CCXCVII", function(){
        expect(toRoman(297)).toBe("CCXCVII");
    });

    it ("converts 454 to CDLIV", function(){
        expect(toRoman(454)).toBe("CDLIV");
    });

    it ("converts 775 to DCCLXXV", function(){
        expect(toRoman(775)).toBe("DCCLXXV");
    });

    it ("converts 1008 to MVIII", function(){
        expect(toRoman(1008)).toBe("MVIII");
    });

    it ("converts 3999 to MMMCMXCIX", function(){
        expect(toRoman(3999)).toBe("MMMCMXCIX");
    });
})

