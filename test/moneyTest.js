import {formatCurrency} from '../utility/money.js';

console.log("test suite : formatCurrency"); // give test case group name
// basic test case
console.log("convert cents into dollars"); // give test case name
if(formatCurrency(2095)==='20.95'){
    console.log('Test passed')
} else{
    console.log('Test failed')
}

// edge case test cases
console.log("work with 0"); 
if(formatCurrency(0)==='0.00'){
    console.log('Test passed')
} else{
    console.log('Test failed')
}

console.log("round up to nearest cent"); 
if(formatCurrency(1000.5)==='10.01'){
    console.log('Test passed') // if remove math.round from formant currency function then this test case will fail
}
else{
    console.log('Test failed')
}

//teating framework do these all things for us first we learn Jasmine




/*

*/