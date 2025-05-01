const name = "Mihir"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('mihir-mp-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Mihir    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://mihir.com/Mihir%20patel"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));


/*Method	         Description
.length    	       Returns string length
.charAt(n)	       Character at index n
.indexOf(val)	     First index of val or -1
.substring(a,b)	   Extract from a to b (no negatives)
.slice(a,b)	       Like substring but supports negatives
.trim()	           Removes whitespace from ends
.replace(a,b)	     Replaces first a with b
.includes(val)	   Checks if val exists in string
.split('-')	       Splits string into array by delimiter
*/
