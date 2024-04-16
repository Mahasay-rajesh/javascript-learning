// function add(a, b) {
//   //   let c = a + b;
//   console.log("hello");
// }
// // add(10);
// // add(10, 50, 70, 90, 650); //10+undefined will be (nan) not a number
// add();

// let a = true;
// if (a == false) {
//   console.log("i am god");
// }
// else {
//   console.log("god is great");
// }

// function trip(a) {
//     if a > 3500 {
//         console.log('mysore')
//     }
//     else if (a < 3500) {
//         console.log("lalbhag")
//     } else {
//         console.log("orion")
//     }
// }
// trip(3500)
// trip(3000)
// trip(3500)

// let user_name = "Rajesh kumar"
// let password = "1234"
// function bankdetails(user_name, password) {
//     if (user_name == "Rajesh kumar" && password == "1234")
//         console.log("login")
//     console.log("withdraw")
//     console.log("change pin")
//     console.log("change password")
//     else {
//         console.log("invalid password")

//     }
// }
// bank

// setTimeout(() => {
//   console.log("Nil have lots of gf");   ///this will be print after 5 sec bcs i mention there 5000milisec
// }, 5000);
// console.log("hello");

///anonymous
// let add = function (a, b) {
//   console.log(a + b);
// };
// add(10, 20);

// ///arrow function

// let sub = () => {
//   console.log("montu boss having lots of fat inside his body");
// };
// sub();

// let arr = ["choloate", 78, true, false];
// arr.map((X) => {
//   console.log(X);
// });

let Cart = [
  {
    ID: 01,
    name: "iphone",
    price: 100000,
  },
  {
    ID: 02,
    name: "bmw",
    price: 10000000,
  },
  {
    ID: 03,
    name: "pakistan",
    price: 100000,
  },
];
// let b = Cart.filter((x) => x.ID <= 400);
// console.log(b);

let totalprice = Cart.reduce((val, X) => (val = val + X.price), 0);
console.log(totalprice);

///==============================================================================================
class pyspider {
  constructor(id, name, course) {
    this.id = id;
    this.name = name;
    this.course = course;
  }
}
let student1 = new pyspider(1, "Rajesh", "python full stack");
let student2 = new pyspider(2, "uttam", "javascript");
console.log(student1);
console.log(student2.course);
