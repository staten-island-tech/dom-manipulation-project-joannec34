<<<<<<< HEAD
//dom manipulation project

=======
//dom manipulation

/* const button = document.getElementById("button"); //use when getting an id
const text = document.querySelector("#text"); //use when getting a class
console.log(button); */

const domSelectors = {
  button: document.getElementById("button"),
  box: document.getElementById("box"),
  text: document.querySelector("#text"),
  point: document.querySelectorAll(".point"), //using .querySelectorAll creates a nodelist, which acts similar to an array
};

console.log(domSelectors.point);
>>>>>>> e440d26faa7c37ab4665c481ea4ee93501a5aa51
