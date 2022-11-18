//dom manipulation

/*
Create an object called “DOMSelectors” to hold your DOM Selectors
Create a function that creates an object and calls the following functions
Create a function that injects the newly created object into the DOM
Create a function that clears the input fields after injecting the object
Create a function to remove an object after they have been created
*/

const DOMSelectors = {
  body: document.querySelector("body"),
  box1: document.querySelector(".box1"),
  box2: document.querySelector(".box2"),
  removestuff: document.querySelectorAll(".box2"),
  heartbutton: document.getElementById("heart"),
  submitbtn: document.getElementById("btn"),
  byeimage: document.getElementById("byeimage"),
  form: document.getElementById("form"),
  urname: document.getElementById("urname"),
  theirname: document.getElementById("theirname"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  DOMSelectors.submitbtn.disabled = true;
  let urname = DOMSelectors.urname.value;
  let theirname = DOMSelectors.theirname.value;
  let luvpercentage = Math.floor(Math.random() * (100 - 1)) + 1;
  const byeimage = DOMSelectors.byeimage;
  byeimage.remove();
  DOMSelectors.box2.insertAdjacentHTML(
    "beforeend",
    `<p>${urname} and ${theirname} are ${luvpercentage}% compatibile</p>`
  );
  if (luvpercentage < 25) {
    DOMSelectors.box2.insertAdjacentHTML(
      "beforeend",
      `<p class="displaytext">Maybe it's time to find someone new.</p>
      <img src="https://media.tenor.com/5eBi-G3uqmoAAAAi/cute-crying.gif" alt="verybad">`
    );
  } else if (luvpercentage >= 25 && luvpercentage < 50) {
    DOMSelectors.box2.insertAdjacentHTML(
      "beforeend",
      `<p class="displaytext">Maybe stay as friends?</p>
      <img src="https://media.tenor.com/BnL0rOm6j3sAAAAi/quby-cute.gif" alt="bad">`
    );
  } else if (luvpercentage >= 50 && luvpercentage < 75) {
    DOMSelectors.box2.insertAdjacentHTML(
      "beforeend",
      `<p class="displaytext">You guys go well together!</p>
      <img src="https://media.tenor.com/VMBU8GtEvsIAAAAi/quby-cute.gif" alt="good">`
    );
  } else {
    DOMSelectors.box2.insertAdjacentHTML(
      "beforeend",
      `<p class="displaytext">You guys are meant for each other!</p>
      <img src="https://media.tenor.com/0vTpvmaxXZ8AAAAi/line.gif" alt="verygood">`
    );
  }
  DOMSelectors.box2.insertAdjacentHTML(
    "beforeend",
    `<p><button id="removebtn">Try Again</button></p>`
  );
  function clearinput() {
    DOMSelectors.urname.value = "";
    DOMSelectors.theirname.value = "";
  };
  clearinput();
  function tryagain() {
    removebtn.addEventListener("click", function () {
      DOMSelectors.removestuff.forEach((node) => {
        node.textContent = ``;
      });
      DOMSelectors.box2.insertAdjacentElement("afterbegin", byeimage);
      DOMSelectors.submitbtn.disabled = false;
    });
  }
  tryagain();
});

DOMSelectors.heartbutton.addEventListener("click", function () {
  function changebackground(background) {
    background.style.backgroundColor = "#fdefd8";
  }
  changebackground(DOMSelectors.body);
  function changebox(box) {
    box.style.backgroundColor = "#f8e3c0";
    box.style.borderColor = "#F5D9A9";
  }
  changebox(DOMSelectors.box1);
  changebox(DOMSelectors.box2);
  function changeinputs(button) {
    button.style.backgroundColor = "#fdefd8";
    button.style.borderColor = "#F5D9A9";
  }
  changeinputs(DOMSelectors.urname);
  changeinputs(DOMSelectors.theirname);
});