"use strict";

var _localforage = require("localforage");

var wrapper = document.getElementById("wrapper"); // Array for save in localstorage
//
//create 28 fields/
// Check in localstorage fields status

function createGrid(arr) {
  for (var i = 1; i < arr.length; i++) {
    var field = document.createElement("div");
    field.id = "field".concat(i);
    field.classList.add("field");
    field.classList.add("neutral");
    field.innerHTML = "".concat(i);
    wrapper.appendChild(field);
  }
}

(0, _localforage.getItem)("28days", function (err, value) {
  console.log(value);

  if (value === null) {
    var arr = [];

    for (var i = 1; i <= 28; i++) {
      arr[i] = 0;
    }

    createGrid(arr);
  } else {
    createGrid(value);
  }
});
wrapper.addEventListener("click", function (e) {
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