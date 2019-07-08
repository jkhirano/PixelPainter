let savedColor;

//canvas
let canvas = document.createElement("div");
canvas.id = "canvas";
pixelPainter.appendChild(canvas);

//rows
for (x = 0; x < 40; x++) {
  let row = document.createElement("div");
  row.className = "row";
  canvas.appendChild(row);

  //boxes
  for (y = 0; y < 40; y++) {
    let box = document.createElement("div");
    box.className = "box";
    row.appendChild(box);

    box.addEventListener("mousedown", function() {
      let boxArr = document.getElementsByClassName("box");
      for (let i = 0; i < boxArr.length; i++) {
        boxArr[i].addEventListener("mouseover", showColor);
      }
      this.style.background = savedColor;
    });

    box.addEventListener("mouseup", function() {
      let boxArr = document.getElementsByClassName("box");
      for (let i = 0; i < boxArr.length; i++) {
        boxArr[i].removeEventListener("mouseover", showColor);
      }
    });
  }
}

function showColor() {
  this.style.backgroundColor = savedColor;
}

//color picker
let colorPicker = document.createElement("div");
colorPicker.id = "colorPicker";
pixelPainter.appendChild(colorPicker);

let colors = [
  "red",
  "pink",
  "purple",
  "RebeccaPurple",
  "indigo",
  "blue",
  "lightBlue",
  "cyan",
  "teal",
  "green",
  "lightGreen",
  "lime",
  "yellow",
  "coral",
  "orange",
  "orangeRed",
  "brown",
  "grey",
  "LightSlateGray",
  "black"
];

//row
for (z = 0; z < 10; z++) {
  let colorRow = document.createElement("div");
  colorRow.className = "colorRow";
  colorPicker.appendChild(colorRow);

  //boxes
  for (a = 0; a < 2; a++) {
    let colorBox = document.createElement("div");
    colorBox.className = "colorBox";
    colorRow.appendChild(colorBox);
    colorBox.style.backgroundColor = colors[z * 2 + a];
    colorBox.addEventListener("click", storeColor);
  }

  function storeColor() {
    savedColor = this.style.backgroundColor;
  }
}

//clear button & function
let clearButton = document.createElement("button");
clearButton.id = "clear";
clearButton.innerHTML = "Clear";
colorPicker.appendChild(clearButton);

clearButton.addEventListener("click", clearCanvas);

function clearCanvas() {
  let boxArr = document.getElementsByClassName("box");
  for (let i = 0; i < boxArr.length; i++) {
    boxArr[i].style.background = "none";
  }
}

//delete button & function
let deleteButton = document.createElement("button");
deleteButton.id = "delete";
deleteButton.innerHTML = "Delete";
colorPicker.appendChild(deleteButton);

deleteButton.addEventListener("click", deleteColor);

// deleteButton.addEventListener("mousedown", function() {
//   let boxArr = document.getElementsByClassName("box");
//   for (let i = 0; i < boxArr.length; i++) {
//     boxArr[i].addEventListener("mouseover", deleteColor);
//   }

// //   this.style.background = "none";
//   //   savedColor = "none";
// });

// box.addEventListener("mouseup", function() {
//   let boxArr = document.getElementsByClassName("box");
//   for (let i = 0; i < boxArr.length; i++) {
//     boxArr[i].removeEventListener("mouseover", deleteColor);
//   }
// });

function deleteColor() {
  savedColor = "none";
}
