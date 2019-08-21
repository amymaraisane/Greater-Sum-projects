describe('Cash Register', () => {

    it('returns correct change in pennies', ()=>{
        expect(checkCashRegister(.99, 1.00, [["PENNY", .01], ["NICKEL", .05], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])).toEqual([["PENNY", .01]]);
    })

    it('returns correct change in nickels only when enough nickels are available', ()=>{
        expect(checkCashRegister(.05, .10, [["PENNY", .05], ["NICKEL", .06], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])).toEqual([["NICKEL", .05]]);
    })

     it('returns correct change in a lower denomination (penny) if not enough of larger (nickel)', ()=>{
        expect(checkCashRegister(.75, 1.00, [["PENNY", .25], ["NICKEL", .05], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])).toEqual([["NICKEL", .05], ["PENNY", .20]]);
    })
    
    it('returns correct change in denominations up to dimes starting with largest available', ()=>{
        expect(checkCashRegister(2.96, 5.00, [["PENNY", .40], ["NICKEL", 3.00], ["DIME", .10], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])).toEqual([["DIME", .10], ["NICKEL", 1.90], ["PENNY", .04]]);
    })

    it('returns correct change in denominations up to hundreds starting with largest available', ()=>{
        expect(checkCashRegister(337.80, 500.00, [["PENNY", .10], ["NICKEL", .35], ["DIME", .50], ["QUARTER", 1.25], ["ONE", 10.00], ["FIVE", 10.00], ["TEN", 20.00], ["TWENTY", 20.00], ["ONE HUNDRED", 500.00]])).toEqual([["ONE HUNDRED", 100.00], ["TWENTY", 20.00], ["TEN", 20.00], ["FIVE", 10.00], ["ONE", 10.00], ["QUARTER", 1.25], ["DIME", .50], ["NICKEL", .35], ["PENNY", .10]]);
    })

    it('can skip an available higher denomination if needed to make exact change', ()=>{
        expect(checkCashRegister(.60, 1.00, [["PENNY", 0], ["NICKEL", 0], ["DIME", .40], ["QUARTER", .25], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 100.00]])).toEqual([["DIME", .40]]);
    })

    it('returns the string "Closed" if exact change due is equal to cid with only one denomination needed', ()=>{
        expect(checkCashRegister(.60, 1.00, [["PENNY", 0], ["NICKEL", 0], ["DIME", .40], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])).toEqual("Closed");
    })

    it('returns the string "Closed" if exact change due is equal to cid with more than one denomination needed', ()=>{
        expect(checkCashRegister(.50, 1.00, [["PENNY", .30], ["NICKEL", .10], ["DIME", .10], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])).toEqual("Closed");
    })

    it('returns the string "Closed" if exact change due is equal to cid with all denominations needed', ()=>{
        expect(checkCashRegister(7.00, 50.00, [["PENNY", .30], ["NICKEL", .10], ["DIME", .10], ["QUARTER", .50], ["ONE", 2.00], ["FIVE", 10.00], ["TEN", 10.00], ["TWENTY", 20.00], ["ONE HUNDRED", 0]])).toEqual("Closed");
    })

    it('returns the string "Insufficient Funds" if there is no cash in the drawer at all', ()=>{
        expect(checkCashRegister(9.00, 10.00, [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])).toEqual("Insufficient Funds");
    })

    it('returns the string "Insufficient Funds" if there is not enough change in drawer to make exact change', ()=>{
        expect(checkCashRegister(6.00, 50.00, [["PENNY", .30], ["NICKEL", .10], ["DIME", .10], ["QUARTER", .50], ["ONE", 2.00], ["FIVE", 10.00], ["TEN", 10.00], ["TWENTY", 20.00], ["ONE HUNDRED", 0]])).toEqual("Insufficient Funds");
    })
})
