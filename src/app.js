/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
const contenido = document.getElementById("contenido");

window.onload = function() {
  //write your code here
  function getexcuses() {
    let who = ["The dog", "My grandma", "The mailman", "My bird"];
    let randomNumber = Math.random();
    let action = ["ate", "peed", "crushed", "broke"];
    let randomNumber1 = Math.random();
    let what = ["my homework", "my phone", "the car"];
    let randomNumber2 = Math.random();
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];
    let randomNumber3 = Math.random();

    return (
      who[Math.floor(randomNumber * 3)] +
      "  " +
      action[Math.floor(randomNumber1 * 3)] +
      "  " +
      what[Math.floor(randomNumber2 * 2)] +
      "  " +
      when[Math.floor(randomNumber3 * 4)]
    );
  }
  contenido.innerHTML = getexcuses();
};

console.log("Hello Rigo from the console!");
