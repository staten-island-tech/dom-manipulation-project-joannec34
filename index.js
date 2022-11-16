//dom manipulation

/*
Create an object called “DOMSelectors” to hold your DOM Selectors
Create a function that creates an object and calls the following functions
Create a function that injects the newly created object into the DOM
Create a function that clears the input fields after injecting the object
Create a function to remove an object after they have been created
*/

const DOMSelectors = {
  box1: document.querySelector(".box1"),
  box2: document.querySelector(".box2"),
  box2stuff: document.querySelectorAll(".box2"),
  byeimage: document.getElementById("byeimage"),
  button: document.getElementById("btn"),
  urname: document.querySelector(`#urname`),
  theirname: document.querySelector(`#theirname`),
  form: document.getElementById("form"),
  removebtn: document.getElementById("removebtn"),
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
    `<p>${urname} and ${theirname} are ${luvpercentage}% compatibile.</p>`
  );
  if (luvpercentage < 50) {
    DOMSelectors.box2.insertAdjacentHTML(
      "beforeend",
      `<p class="displaytext">Maybe it's time to find someone new.</p>
      <img src="https://media.tenor.com/5eBi-G3uqmoAAAAi/cute-crying.gif" alt="bad">`
    );
  } else {
    DOMSelectors.box2.insertAdjacentHTML(
      "beforeend",
      `<p class="displaytext">You guys are meant for each other!</p>
      <img src="https://media.tenor.com/-MlEF7aRcA0AAAAi/tkthao219-quby.gif" alt="good">`
    );
  }
  DOMSelectors.box2.insertAdjacentHTML(
    "beforeend",
    `<p><button type="button" id="removebtn">Try Again</button></p>`
  );
  function clearinput() {
    DOMSelectors.urname.value = "";
    DOMSelectors.theirname.value = "";
  };
  clearinput();
  });

    //FIX THE MESS BELOW SOMEHOW XD
  DOMSelectors.removebtn.addEventListener("click", function() {
    let remove = DOMSelectors.box2stuff;
    remove.forEach((node) => {
      node.addEventListener("click", function(event) {
        event.target.parentElement.remove();
      })
    });
    DOMSelectors.box2.insertAdjacentHTML(
      "beforeend",
      `<img id="byeimage" src="https://media.tenor.com/XsWhfNnJu5cAAAAi/soft-meme.gif" alt="heart">`
    );
  });
