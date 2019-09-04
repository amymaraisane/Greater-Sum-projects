describe('Phone Number Validator', () => {
    it('checks for 10 values present', ()=>{
        expect(phoneNumChecker('5555555555')).toBe(true)
        expect(phoneNumChecker('555555555')).toBe(false)
    })
    it('checks that each value is a number', ()=>{
        expect(phoneNumChecker('555555555a')).toBe(false)
    })
    it('can include a space before 2nd and 3rd number groups', ()=>{
        expect(phoneNumChecker('222 222 2222')).toBe(true)
        expect(phoneNumChecker('2 22222 2222')).toBe(false)
    })
    it('cannot have exta spaces or dashes', ()=>{
        expect(phoneNumChecker('222 222  2222')).toBe(false)
    })
    it('can include a dash before 2nd and 3rd number groups', ()=>{
        expect(phoneNumChecker('222-222-2222')).toBe(true)
    })
    it('can have parens around area code then space or dash before 2nd and 3rd number groups', ()=>{
        expect(phoneNumChecker('(222) 222 2222')).toBe(true)
        expect(phoneNumChecker('(222)222-2222')).toBe(true)
        expect(phoneNumChecker('(222) 222-2222')).toBe(true)
    })
    it('can have parens around area code then no spaces/dashes before 2nd group' , ()=>{
        expect(phoneNumChecker('(222)2222222')).toBe(true)
        expect(phoneNumChecker('(222)222 2222')).toBe(true)
    })
    it('cannot have only one space or dash', ()=>{
        expect(phoneNumChecker('222-2222222')).toBe(false)
    })
});





// if dash before 2nd group, must have dash before 3rd group
//222-222 2222  should be false  
//(222)-222 2222   should be false

//if space before 2nd group, must have have dash or space before 3rd group
//(222) 2222222  should be false
//222 2222222  should be false
//(222) 222-2222  should be true  (already passes)
//222 222-2222 should be true    (already passes)

//closing parens cannot be followed by a dash
// (222)-222-2222   should be false
// (222)-2222222   should be false

//cannot have only one parens
// (222 222 2222   should be false
// 222) 222 2222   should be false

