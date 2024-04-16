// let obj = {
//   id: 1,
//   name: "Rajesh",
//   sal: "10000000000",
//   role: "jesh company",
//   married: true,
// };
// console.log(obj);

// let arr = [1, true, "he", [12, 86], { id: "23", name: "Rajesh" }];
// console.log(arr[4].id);

///should be atleast 10 [[],{},[],{}.........]
///name, id, price, desc

// let arr = [
//   1,
//   true,
//   "he",
//   [12, 86],
//   { id: "23", name: "Rajesh" },
//   [5, 6],
//   { home: "bihar", via: "Rajaura" },
// ];
// console.log(length(arr));

let iron = document.getElementById("ironman");
iron.innerText = "i love you 30000000000";
iron.style.color = "red";
iron.style.backgroundColor = "midnightblue";
iron.style.height = "100px";
console.log(iron);

let hulk = document.getElementsByClassName("banner");
hulk[0].innerText = "i love my self.............";
hulk[1].innerText = "myself.......................";
hulk[0].style.backgroundColor = "aqua";
hulk[0].style.fontSize = "60px";
let body = document.querySelector('body')
console.log(body);

function mode() {
    if (body.style.backgroundColor != "black")
        body.style.backgroundColor = "black"
    body.style.color = "gainsboro"
} else {
    body.style.backgroundColor = "white"
    body.style.color = "black"

}

// let aquaman = document.getElementsByTagName("h3");
// aquaman[0].innerText = "i love india";

// let h1 = document.querySelector("#ironman");
// h1.textContent = "somethings somethings";

// document.querySelector(".banner").textContent = "har har mahadev";
// document.querySelector("h3").textContent = "jai shree ram ";

// document.querySelectorAll("h4")[0].innerText = "jai hanuamn...";
// document.querySelectorAll("h4")[1].innerText = "jai hanuamn...";