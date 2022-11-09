//dom manipulation

/* const button = document.getElementById("button"); //use when getting an id
const text = document.querySelector("#text"); //use when getting a class
console.log(button); */

/* const DOMSelectors = {
  button: document.getElementById("button"),
  text: document.querySelector("#text"),
  box: document.getElementById("box"),
  points: document.querySelectorAll(".point"), //nodelist
};

function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.textContent = "this is now a bigger red box";
  text.style.fontSize = "40px";
}

DOMSelectors.button.addEventListener("click", function(){
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
});

function changeLi() {
  let pointIndex = 1;
  DOMSelectors.points.forEach((point) => {
  point.addEventListener("click", function(){
    point.textContent = `hello i am point ${pointIndex}`;
    pointIndex++;
  });
});
}
changeLi(); */

/*
Create an object called “DOMSelectors” to hold your DOM Selectors
Create a function that creates an object and calls the following functions
Create a function that injects the newly created object into the DOM
Create a function that clears the input fields after injecting the object
Create a function to remove an object after they have been created
*/

const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input: document.querySelector(`#input`),
}

const cat = "meow";

DOMSelectors.box.insertAdjacentHTML("afterend",
`<h1>we are a ${cat}</h1>`);

DOMSelectors.button.addEventListener("click", function(){
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend",
  `<p>${input}</p>`)
  DOMSelectors.input.value = "";
})