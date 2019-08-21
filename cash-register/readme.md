**1. Note on FCC Exact Change Challenge:**

- Just an FYI, Free Code Camp's challenge asks for the function to return an object containing both a status string and change array. For example: 
    {status: "OPEN", change: [["QUARTER", 0.5]]}

- I made my solution match what was given in the Greater Sum instructions and examples but I just wanted to let you know in case FCC's challenge was updated recently and you were unaware. 


**2. Notes on code:**
- In the long ternary operator, line 70
    inDrawer.length === currencyUsed.length checks that there are not unused smaller values
    usedLowerValues ==== false checks that there are not unused higher values

- I wanted to add additional tests to check that the user input was of type (number, number, [[valueLookup.hasOwnProperty()][number]]) but I think this would be more appropriate as a separate function that runs before checkCashRegister runs. Nesting it inside created too many errors and scope concerns, so if this was a part of a larger project I would include it as a separate component. 


**3. Main things learned in this exercise:**
- Practical application of when to use const/let 
- Using a return statement with ternary operator for brevity
- Storing data in two formats at time of creation rather than converting it later can sometimes be helpful
- If tests pass when run separately but fail together, isolate which combination causes the problem rather than running them all  
- Global variables should be used sparingly to avoid unintended results. Sometimes they can be a temporary solution until you find the correct local scope.
- If you are already tracking a count or state, consider whether you can use it in more than one place


**4. Remaining Questions to Research:**
- I tried using exactChange.filter() at line 68 to create the currencyUsed array, but original array was being modified whenever new array was modified, so I used a forEach loop instead. Will continue to look for reasons why this could have happened since it shouldn't with .filter() 

- Based on the Rule of 3, I implemented a lookup table for the denominations rather than designing separate functions for each denomination. At first I kept tests in my code for adding each successively higher denomination (ones, fives, etc.). But I think that in reality since a lookup table could be very large you would not want to have to write a test covering each possible lookup. I still have to find out the best practice on this.