// let a = true,
//   b = false;
// console.log(a);
// console.log(b);
// console.log(typeof a);

// let a;
// console.log(a);
// console.log(typeof a);
// let a = null;
// console.log(a);
// console.log(typeof a);

// let a;
// a = 5 + 20;
// a = 4 * 4;
// a = 4 / 4;
// a = 4 ** 4;
// a = 4 - 4;
// a = 4 * 4;
// console.log(a);
// let a;
// console.log(true || false);
// console.log(!false);
// console.log(true & false);

// let a = 10;
// a++;
// a--;
// console.log(a);

// let a, b;
// a = 5;
// b = "5";
// console.log(a == b);
// console.log(a === b);
// console.log(a !== b);
// console.log((a += b));
// console.log((a -= b));
// console.log((a *= b));
// console.log((a += b));
// console.log((a /= b));

// let a = 10;
// let b = a % 2 === 0 ? "even num" : "odd num";
// console.log(b);

// var a = 10;
// var a = 20; // redeclaration
// a = 400;    //reinitiaalisation
// console.log(a);

// let a = 10;
// let a = 432; // no redeclaration
// a = 34;    //reinitiaalisation
// console.log(a);

// const a = 10;
// const a = 432; // no redeclaration
// a = 32141;    //reinitiaalisation
// console.log(a);

// a = 10 + true;
// console.log(typeof a);
// b = "hello" + true;
// console.log(typeof b);
// c = true + true;
// console.log(typeof c);
// d = true + null;
// console.log(typeof d);
// e = "hello" + null;
// console.log(typeof e);

// var a = 10;
// var b = 20;   ///redeclaration
// a = 40;       ///reinitialize
// console.log(a);

// let x = 10;
// // Here x is 10

// {
// let x = 2;
// // Here x is 2
// }

// // Here x is 10

// const a = '10';
// const a = 234;
// a = 321421;
// console.log(a);

// const PI = 3.141592653589793;
// PI = 3.14; // This will give an error
// PI = PI + 10; // This will also give an error

let arr = ["iron man", 23, true, "spider man", false, null, "this"];
//arr.push(30,"catpain") //console.log(arr); //arr.pop()
//arr.unshift("New York","Texas") //console.log(arr);
//arr.shift()
arr.splice(2, 4, "USA", "Canada", "Germany", "Chicago");
console.log(arr);
arr.splice(2, 3);
console.log(arr);
arr.splice(2);
console.log(arr);
