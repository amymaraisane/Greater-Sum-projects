describe('Phone Number', () => {
    it('must have 10 values present', ()=>{
        expect(phoneNumChecker('1234567890')).toBe(true)
        expect(phoneNumChecker('12345678')).toBe(false)
    })
    it('must have only number values', ()=>{
        expect(phoneNumChecker('123#*67890')).toBe(false)
    })
    // it('can include one space after area code and before 3rd number group', ()=>{
    //     expect(phoneNumChecker('123 456 7890')).toBe(true)
    //     expect(phoneNumChecker('1234 5678   90')).toBe(false)
    // })
    // it('can include one dash after area code and before 3rd number group', ()=>{
    //      expect(phoneNumChecker('123-456-7890')).toBe(true)
    //      expect(phoneNumChecker('12-34-56-890')).toBe(false)
    // })
    // it('can have parens around area code followed by no space' , ()=>{
    //     expect(phoneNumChecker('(222)222-2222')).toBe(true)
    // })
    //it('can have parens around area code followed by a space', ()=>{
    //     expect(phoneNumChecker('(222) 222 2222')).toBe(true)
    // }) 
});


