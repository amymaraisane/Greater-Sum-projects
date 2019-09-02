describe('Phone Number Validator', () => {
    it('checks for 10 values present', ()=>{
        expect(phoneNumChecker('5555555555')).toBe(true)
        expect(phoneNumChecker('555555555')).toBe(false)
    });
    it('checks that each value is a number', ()=>{
        expect(phoneNumChecker('555555555a')).toBe(false)
    })
    it('can include a space after 3rd number and 6th number', ()=>{
        expect(phoneNumChecker('222 222 2222')).toBe(true)
    //     expect(phoneNumChecker('222-222-2222')).toBe(true)
    //     expect(phoneNumChecker('2 22222 2222')).toBe(false)
    })
    // it('can have parens around area code then no space', ()=>{
    //     expect(phoneNumChecker('(222)222-2222')).toBe(true)
    //     expect(phoneNumChecker('(222) 222 2222')).toBe(true)
    //     expect(phoneNumChecker('(222)222 2222')).toBe(false)
    //     expect(phoneNumChecker('(222)2222222')).toBe(false)
    // })
});


