/*
"use strict";
data = 100;

//didn't declare the variable but assign the value

console.log(data); //ReferenceError: data is not defined

*/
/*
"use strict";
data = 100;
//console.log(data); //100
delete data; //SyntaxError: Delete of an unqualified identifier in strict mode.
//console.log(data); //ReferenceError: data is not defined

*/

/*
"use strict";
data = 100;
function my_fun() {
  console.log(data); //ReferenceError: data is not defined
  data1 = 200; //ReferenceError: data1 is not defined
}
my_fun();
*/
/*
"use strict";
console.log(data); //undefined
var data = 100;
console.log(data); //100
*/

//validations

let regEx = /^[0-9]+$/;
console.log("ABCD12345".match(regEx)); //null
console.log("12345".match(regEx)); //[ '12345', index: 0, input: '12345', groups: undefined ]

let regEx1 = /^[-+]?[0-9]+$/;
console.log("-12345".match(regEx1)); //[ '-12345', index: 0, input: '-12345', groups: undefined ]
