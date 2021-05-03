import { getItem } from "localforage";
const wrapper = document.getElementById("wrapper");


// Array for save in localstorage
//
//create 28 fields/
// Check in localstorage fields status
function createGrid(arr) {
  for( let i = 1; i < arr.length; i++) {
    const field = document.createElement("div");
    field.id = `field${i}`;
    field.classList.add("field");
    field.classList.add("neutral");
    field.innerHTML = `${i}`;
    wrapper.appendChild(field);
  }
  
}

getItem("28days", function (err, value) {
  console.log(value);
  if(value === null) {
    const arr = [];
    for (let i = 1; i <= 28; i++) {
      arr[i] = 0;
    }
    createGrid(arr);
  } else {
    createGrid(value);
  }
});



wrapper.addEventListener("click", (e) => {
  if (e.target.classList.contains("neutral")) {
    e.target.classList.remove("neutral");
    e.target.classList.add("done");
  } else if (e.target.classList.contains("done")) {
    e.target.classList.remove("done");
    e.target.classList.add("fail");
  } else if (e.target.classList.contains("fail")) {
    e.target.classList.remove("fail");
    e.target.classList.add("neutral");
  }
});
