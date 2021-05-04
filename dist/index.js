"use strict";

var _localforage = _interopRequireDefault(require("localforage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var wrapper = document.getElementById("wrapper"); //create Save Button

var saveButton = document.createElement("button");
saveButton.innerHTML = "Save"; //create 28 fields/
// createGrid function. Get array from localStorage - if not exists creates new one

function createGrid(arr) {
  return new Promise(function (resolve, reject) {
    for (var i = 1; i < arr.length; i++) {
      var field = document.createElement("div");
      field.id = "field".concat(i);

      switch (arr[i]) {
        case 0:
          field.classList.add("neutral");
          break;

        case 1:
          field.classList.add("done");
          break;

        case 2:
          field.classList.add("fail");
          break;
      }

      field.classList.add("field");
      field.innerHTML = "".concat(i);
      wrapper.appendChild(field);
    }

    wrapper.appendChild(saveButton);
    resolve(arr);
  });
}

function changeArrayData(arr) {
  var self = this;
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
  saveButton.addEventListener("click", function () {
    _localforage["default"].setItem("28days", arr);
  });
}

_localforage["default"].getItem("28days").then(function (arr) {
  if (arr === null) {
    var _arr = [];

    for (var i = 1; i <= 28; i++) {
      _arr[i] = 0;
    }

    createGrid(_arr).then(function (result) {
      changeArrayData(result);
    }); //console.log(arr);
  } else {
    createGrid(arr).then(function (result) {
      changeArrayData(result); //return arr;
    });
  }
}); // const set = setItem("28days", function (arr) {
//   console.log(arr);
// }).catch((err) => {
//   console.log(err);
// });