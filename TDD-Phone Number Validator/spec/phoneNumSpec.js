describe('Phone Number Validator', () => {
    it('checks for 10 values present', ()=>{
        expect(phoneNumChecker('5555555555')).toBe(true)
        expect(phoneNumChecker('555555555')).toBe(false)
    })
    it('checks that each value is a number', ()=>{
        expect(phoneNumChecker('555555555a')).toBe(false)
    })
    it('can include a space after 2nd and 3rd number groups', ()=>{
        expect(phoneNumChecker('222 222 2222')).toBe(true)
        expect(phoneNumChecker('2 22222 2222')).toBe(false)
    })
    it('can include a dash after 2nd and 3rd number groups', ()=>{
        expect(phoneNumChecker('222-222-2222')).toBe(true)
    })
    it('can have parens around area code then space or dash after 2nd and 3rd number groups', ()=>{
        expect(phoneNumChecker('(222) 222 2222')).toBe(true)
        expect(phoneNumChecker('(222)222-2222')).toBe(true)
    })
    it('can have parens around area code then no spaces/dashes', ()=>{
        expect(phoneNumChecker('(222)2222222')).toBe(true)
    })
    it('cannot have only one space or dash', ()=>{
        expect(phoneNumChecker('222-2222222')).toBe(false)
    })

    it('cannot have exta spaces or dashes', ()=>{
        expect(phoneNumChecker('222 222  2222')).toBe(false)
    })
});


// expect(phoneNumChecker('(222)222 2222')).toBe(false)


///222 222-2222 should be true
//222-222 2222  should be false

// (222) 222-2222  should be true    
// (222)-222 2222   should be false

// (222)-222-2222   should be false
// (222)-2222222   should be false
// (222)-222 2222   should be false

// (222) 222-2222   should be true

// (222 222 2222   should be false
// 222) 222 2222   should be false

