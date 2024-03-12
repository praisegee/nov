"use strict";

// const num1 = 34;
// const num2 = 12;

// const result = `The result of num1 + num2 is ${num1 + num2}`;

// console.log(result.slice(4, 18));

// const username = prompt("Enter your username: ");
// const password = prompt("Enter your password: ");

// console.log(username);

// const firstName = "PG";

// if (firstName == "PG") {
//   alert("Good....");
// } else if (true) {
//   alert("Bad....");
// } else if (false || false) {
//   alert("Hmmmm");
// } else {
//   alert("Nothing...");
// }

// alert("KJjkdjksd");

// let i = 1;
// while (i <= 7) {
//   console.log(i);
//   i++;
// }

// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);

// let i = 1;

// while (i < 40) {
//   console.log(i);
//   if (i == 20) continue;
//   i++;
// }

// function reverse(text) {
//   let content = "";
//   for (let i = text.length - 1; i >= 0; i--) {
//     content += text[i];
//   }
//   return content;
// }

// let result = reverse("Alonge Money");

// console.log(result); // doGesiarP
// window.console.log("dhshfkjshdkjfhdsjf");
// window.innerHeight;

// const list = document.getElementsByName("something");
// const list = document.getElementsByTagName("li");
// const body = document.body;

// const title = document.getElementsByTagName("h1");
// console.log(title[0]);

// title[0].addEventListener("keypress", function () {
//   body.style.backgroundColor = "red";
// });

const openBtn = document.getElementById("open");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", openModal);
// console.log(open);
let modalIsOpen = false;
function openModal() {
  if (modalIsOpen) {
    modal.style.display = "none";
    modalIsOpen = !modalIsOpen;
  } else {
    modal.style.display = "block";
    modalIsOpen = !modalIsOpen;
  }
}
