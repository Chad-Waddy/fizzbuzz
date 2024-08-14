// youre a JS developer, and youve been asked to build a tav calculation engine
// algorithms: steps to solve this problem
// 1. get the gross income 
const grossIncome = prompt('what is your gross income?')
// 2. get the base tax rate 
const taxRate = 0.0423;
// 3. multiple tje grosss by the tac rate 
const taxesDue = grossIncome * taxRate;
// de the outcome from teh gross 
cosnt netIncome = grossIncome - taxesDue;
// 5. show tje results
 console.log(netIncome);
 alert("your net is now" + netIncome)