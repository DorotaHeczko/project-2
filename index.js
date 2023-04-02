

const myBtn = document.querySelector("button");
  const list = document.querySelector("ul");
let number = 1;


myBtn.addEventListener("click", function () {
  const newEl = document.createElement("li");
  newEl.textContent = number;
  list.appendChild(newEl)
  number += 2;


  if (number % 3 == 0) {
    newEl.classList.add("big")
  }
  
});
