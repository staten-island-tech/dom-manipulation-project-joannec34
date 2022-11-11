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
  byeimage: document.getElementById("byeimage"),
  button: document.getElementById("btn"),
  urname: document.querySelector(`#urname`),
  theirname: document.querySelector(`#theirname`),
  form: document.getElementById("form"),
};

console.log(DOMSelectors.box);

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  let urname = DOMSelectors.urname.value;
  let theirname = DOMSelectors.theirname.value;
  let luvpercentage = Math.floor(Math.random() * (100 - 1)) + 1;
  const byeimage = DOMSelectors.byeimage;
  byeimage.remove();
  DOMSelectors.box2.insertAdjacentHTML(
    "beforeend",
    `<p>${urname} and ${theirname} are ${luvpercentage}% compatibile</p>`
  );
  if (luvpercentage < 50) {
    DOMSelectors.box2.insertAdjacentHTML(
      "beforeend",
      `<p>uh oh! maybe it's time to find someone new</p>
      <img src="https://www.clipartkey.com/mpngs/m/152-1524961_download-crying-emoji-face-iphone-ios-emojis-in.png" alt="bad">`
    );
  } else {
    DOMSelectors.box2.insertAdjacentHTML(
      "beforeend",
      `<p>you guys are meant for each other!</p>
      <img src="https://www.kindpng.com/picc/m/34-345650_smiling-face-with-3-hearts-png-transparent-png.png" alt="good">`
    );
  }
});
