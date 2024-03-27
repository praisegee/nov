"use strict";

// const numArr = [1, 2, 4, 5, 6];

// const b = numArr.forEach(function (val, ind) {
//   //   console.log(val);
//   //   console.log(ind);
//   //   console.log(val);
// });

// console.log(b);

// console.log(arr.includes(90));

// const c = numArr.map(function (val, ind, arr) {
//   //   console.log(arr);
//   return val ** 2;
// });

// console.log(c);

// const f = numArr.filter(function (val, ind) {
//   return val > 3;
// });

// console.log(f);

// const r = numArr.reduce(callbackfn)

// const h1 = document.createElement("h1");
// h1.innerText = "Hello world";
// document.body.appendChild(h1);
// document.body.appendChild(h1);

// const div = document.createElement("div");

// document.body.firstChild();

// div.style.width = "50%";
// div.style.height = "50%";
// div.style.margin = "auto";
// div.style.padding = "20px";
// div.style.borderRadius = "10px";
// div.style.backgroundColor = "#aaa";
// div.innerText = "Hi";
// document.body.appendChild(div);

// console.log(localStorage.getItem("name"));
// if (localStorage.getItem("password") === "pass") console.log("Login");
// localStorage.setItem("name", "PraiseGod");
// localStorage.setItem("password", "pass");

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  walk() {
    console.log(`${this.name} is working...`);
    console.log(`${this.name} is working...`);
    console.log(`${this.name} is working...`);
    console.log(`${this.name} is working...`);
  }
  eat() {
    console.log(`${this.name} is eating bread`);
  }
  walkAndEat() {
    this.walk();
    this.eat();
  }
}

// class Man extends Human {
//   walk() {
//     super.walk();
//     console.log(`${this.name} is bouncing`);
//   }
// }

// const pg = new Man("PraiseGod", 13);

// pg.walk();

// const illust = new Human("David", 12);
// const PG = new Human("PraiseGod", 15);

// // console.log(illust.name);
// // console.log(illust.age);

// // illust.walkAndEat();

// // const n = new Number(3);
// // const b = "Hi";
// const b = new String("Hi");
// console.log(b.toLowerCase());

function MyFunction(name) {
  this.name = name;
  this.walk = function () {
    console.log(`${this.name} is walking`);
  };
}

const obj = new MyFunction("Goood");

console.log(obj.name);
obj.walk();
