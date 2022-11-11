//dom manipulation

/*
Create an object called “DOMSelectors” to hold your DOM Selectors
Create a function that creates an object and calls the following functions
Create a function that injects the newly created object into the DOM
Create a function that clears the input fields after injecting the object
Create a function to remove an object after they have been created
*/

const DOMSelectors = {
  box1: document.getElementById("box1"),
  box2: document.getElementById("box2"),
  form: document.getElementById("form"),
  input1: document.querySelector(`#input1`),
  input2: document.querySelector(`#input2`),
};

DOMSelectors.form.addEventListener("submit", function () {
  let input1 = DOMSelectors.input1.value;
  let input2 = DOMSelectors.input2.value;
  let percentage = Math.floor(Math.random() * (100 - 1)) + 1;
  DOMSelectors.box2.insertAdjacentHTML(
    "afterbegin",
    `<p>${input1} and ${input2} are ${percentage}% compatibile</p>`
  );
  if (percentage < 50) {
    DOMSelectors.box2.insertAdjacentHTML(
      "beforeend",
      `<p>you guys are not meant for each other</p>
      <img src="https://www.clipartkey.com/mpngs/m/152-1524961_download-crying-emoji-face-iphone-ios-emojis-in.png" alt="bad">`
    );
  } else {
    DOMSelectors.box2.insertAdjacentHTML(
      "beforeend",
      `<p>you guys are meant for each other</p>
      <img src="https://www.kindpng.com/picc/m/34-345650_smiling-face-with-3-hearts-png-transparent-png.png" alt="good">`
    );
  }
});
