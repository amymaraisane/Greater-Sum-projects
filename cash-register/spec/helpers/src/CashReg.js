let usedLowerDenoms = false
const valueLookup = {
    "PENNY": .01,
    "NICKEL": .05,
    "DIME": .10,
    "QUARTER": .25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
}

var checkCashRegister = function (price, cash, cashInDrawer) {
    let result = getChange(...arguments)
    usedLowerDenoms = false
    if (result === "Closed"){
        return result
    }
    let exactChange = result[0]
    let changeNeeded = result[1]
    if (changeNeeded > 0){
        usedLowerDenoms = true
        let cid = cashInDrawer.slice(0)
        cid = cid.filter(denom => denom[1] > 0)
        cid.pop()
        if (cid.length === 0){
            usedLowerDenoms = false
            return "Insufficient Funds"
        }
        return checkCashRegister(price, cash, cid)
    } 
    else {
        return exactChange
    }
}

var getChange = (price, cash, cid) => {
    const exactChange = []
    let changeNeeded = Number((cash - price).toFixed(2))
    const inDrawer = cid.filter(denom => denom[1] > 0)
    const remaining = {}
    let depletedValues = ""
    for (i = inDrawer.length -1; i >= 0; i --){
        let count = 0
        let depleted = false
        let currencyType = inDrawer[i][0]
        let singleValue = valueLookup[currencyType]
        while (inDrawer[i][1] > 0 && changeNeeded > 0 && (changeNeeded - singleValue >= 0) && (depleted === false)){
            count ++
            remaining[currencyType] = Number((inDrawer[i][1] - (count * singleValue)).toFixed(2))
            changeNeeded = Number((changeNeeded - singleValue).toFixed(2))
            if (remaining[currencyType] === 0){
                depleted = true
                depletedValues === "" ? depletedValues += currencyType : depletedValues += `, ${currencyType}` 
            }
        }
        if (count > 0){
            let amount = Number((count * singleValue).toFixed(2))
            exactChange.push([currencyType, amount])
        }
        remaining[inDrawer[i][0]]= inDrawer[i][1]
    } 
    const currencyUsed = []
    let currencyUsedS = ""
    exactChange.forEach(val => {
        currencyUsed.push(val[0])
        currencyUsedS === "" ? currencyUsedS += val[0] : currencyUsedS += `, ${val[0]}`
    })
    return (currencyUsedS === depletedValues && changeNeeded === 0 && inDrawer.length === currencyUsed.length && usedLowerDenoms === false) === true ? "Closed" : [exactChange, changeNeeded]
}