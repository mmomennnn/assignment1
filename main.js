//A1
/*
const n = '123';
console.log(Number(n)+7);
*/

//A2
/*
const readline = require('readline');

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function check (s){
Number(s)==NaN ?  '' : Boolean(Number(s));
s==true ?  s=true : s = "invalid";
return s;
}
r.question('Enter a variable : ', (answer) => {
  console.log(check(answer));
  r.close();
});
*/

//A3
/*
var s = ""
for (var i =1 ; i < 10 ; i+=2){
  s+=i + `${i!=9? ', ': ''}`
}
console.log(s)
*/

//A4
/*
const a = [1,2,3,4,5,6];
const result = a.filter((e)=>{return e%2==0})
console.log({result});
*/

//A5
/*
const a1 = [1,2,3];
const a2 = [4,5,6];
var a = [...a1 , ...a2]
console.log(a)
*/

//A6
/*
const n = 2
  switch (n){
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuseday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;
    default:
      console.log('Enter Number from 1 to 7')
  }
*/

//A7
/*
const a = ['b','bb','bbb','bbbb'];
const result = a.map((e)=>{return e.length})
console.log(result);
*/

//A8
/*
const checkDivisibiltyBy3and5 = (n) => n%3==0&&n%5==0 ? "Divisible by both" : 'Not Divisible by both';
console.log(checkDivisibiltyBy3and5(15))
*/

//A9
/*
const power2 = (n) => n**2;
console.log(power2(9));
*/

//A10
/*
const person = {name: 'John', age: 25} 
const {name , age } = person;
console.log(`${name} is ${age} years old`)
*/

//A11
/*
function sum(...data) {
  let s = 0;
  for (var i = 0; i < data.length; i++) {
    s += data[i];
  }
  return s;
}
console.log(sum(1,2,3,4,5,6,7,8,9));
*/

//A12
/*
function success(){
  return new Promise((resolve , reject)=>{
    setTimeout(()=>{
      console.log('success');
    } , 3000);
  })
}
success()
*/

//A13
/*
function maxNum(data) {
  let currentMax = data[0];
  for (var i = 1; i < data.length; i++) {
    currentMax < data[i] ? currentMax=data[i] : '';
  }
  return currentMax;
}
const a =[1,2,3]
console.log(maxNum(a));
*/

//A14
/*
function objKeys(obj){
  let arrayOfKeys = [];
  for(var key in obj) {
    arrayOfKeys.push(key);
  }
  return arrayOfKeys;
}
var obj = {a: 1, b: 2, c: 3 , d: 4};
console.log(objKeys(obj));
*/

//A15
/*
const splitString = (s) => s.split(" ");
console.log(splitString("The quick brown fox"));
*/

//B1
/*
for each runs all elements at the same time and i cannot use break but for of I can use await
*/

//B2
/*
//Hoisting is writing the declaration on the top of the scope
console.log(v);
var v = 5;
//Temporal Dead Zone is area between const or let declaration when hoisted on top of the scope and there inilization
console.log(v);
const v = 5;
*/

//B3
//'==' for comparing equality of two variables values only but '===' for comparing equality of two variables values and data types

//B4
///*
//*/

//B5
/*
//Conversion is when I convert the type using casting
//Example:
s = String(5-1);
console.log(s);

//Coercion is when type is converted automatic
//Example:
n = '4'/'4'
console.log(n)

*/





