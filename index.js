//dom manipulation

/*
Create an object called “DOMSelectors” to hold your DOM Selectors
Create a function that creates an object and calls the following functions
Create a function that injects the newly created object into the DOM
Create a function that clears the input fields after injecting the object
Create a function to remove an object after they have been created
*/

const DOMSelectors = {
  box: document.getElementById("box"),
  button: document.getElementById("btn"),
  input1: document.querySelector(`#input1`),
  input2: document.querySelector(`#input2`),
};

console.log(DOMSelectors.box);

DOMSelectors.button.addEventListener("click", function () {
  let input1 = DOMSelectors.input1.value;
  let input2 = DOMSelectors.input2.value;
  let percentage = Math.floor(Math.random() * (100 - 1)) + 1;
  DOMSelectors.box.insertAdjacentHTML(
    "afterend",
    `<p>${input1} and ${input2} are ${percentage}% compatibile</p>`
  );
});
