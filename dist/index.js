"use strict";

var _localforage = require("localforage");

var wrapper = document.getElementById("wrapper"); //create 28 fields/
// createGrid function. Get array from localStorage - if not exists creates new one

function createGrid(arr) {
  return new Promise(function (resolve, reject) {
    for (var i = 1; i < arr.length; i++) {
      var field = document.createElement("div");
      field.id = "field".concat(i);

      switch (arr[i]) {
        case 0:
          field.classList.add("neutral");

        case 1:
          field.classList.add("done");

        case 2:
          field.classList.add("fail");
      }

      field.classList.add("field");
      field.innerHTML = "".concat(i);
      wrapper.appendChild(field);
    }

    resolve(arr);
  });
}

function changeArrayData(arr) {
  wrapper.addEventListener("click", function (e) {
    if (e.target.classList.contains("neutral")) {
      e.target.classList.remove("neutral");
      e.target.classList.add("done");
      arr[parseInt(e.target.innerText)] = 1;
      console.log(arr[parseInt(e.target.innerText)]);
    } else if (e.target.classList.contains("done")) {
      e.target.classList.remove("done");
      e.target.classList.add("fail");
      arr[parseInt(e.target.innerText)] = 2;
      console.log(arr[parseInt(e.target.innerText)]);
    } else if (e.target.classList.contains("fail")) {
      e.target.classList.remove("fail");
      e.target.classList.add("neutral");
      arr[parseInt(e.target.innerText)] = 0;
      console.log(arr[parseInt(e.target.innerText)]);
    }
  });
}

(0, _localforage.getItem)("28days", function (err, arr) {
  if (arr === null) {
    var _arr = [];

    for (var i = 1; i <= 28; i++) {
      _arr[i] = 0;
    }

    createGrid(_arr).then(function (result) {
      changeArrayData(result);
    });
  } else {
    createGrid(arr);
  }

  console.log(arr); //changeArrayData(arr);
});