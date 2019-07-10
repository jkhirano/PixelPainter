let savedColor;

//canvas
let canvas = document.createElement("div");
canvas.id = "canvas";
pixelPainter.appendChild(canvas);

//canvas rows
for (x = 0; x < 40; x++) {
  let row = document.createElement("div");
  row.className = "row";
  canvas.appendChild(row);

  //canvas boxes
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

//color picker row
for (z = 0; z < 10; z++) {
  let colorRow = document.createElement("div");
  colorRow.className = "colorRow";
  colorPicker.appendChild(colorRow);

  //color picker boxes
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
canvas.appendChild(clearButton);

clearButton.addEventListener("click", clearCanvas);

function clearCanvas() {
  let boxArr = document.getElementsByClassName("box");
  for (let i = 0; i < boxArr.length; i++) {
    boxArr[i].style.background = "none";
  }
}

//eraser button & function
let eraseButton = document.createElement("button");
eraseButton.id = "erase";
eraseButton.innerHTML = "Erase";
canvas.appendChild(eraseButton);
eraseButton.addEventListener("click", eraseColor);

function eraseColor() {
  savedColor = "white";
}

//fill color button & function
let fillButton = document.createElement("button");
fillButton.id = "fill";
fillButton.innerHTML = "Fill";
canvas.appendChild(fillButton);
fillButton.addEventListener("click", fillColor);

function fillColor() {
  let boxArr = document.getElementsByClassName("box");
  for (let i = 0; i < boxArr.length; i++) {
    boxArr[i].style.background = savedColor;
  }
}

let savedImage = [];

//save button & function
let saveButton = document.createElement("button");
saveButton.id = "save";
saveButton.innerHTML = "Save";
canvas.appendChild(saveButton);
saveButton.addEventListener("click", saveImage);

function saveImage() {
  let boxArr = document.getElementsByClassName("box");
  for (let i = 0; i < boxArr.length; i++) {
    savedImage[i] = boxArr[i].style.backgroundColor;
  }
}

//load button & function
let loadButton = document.createElement("button");
loadButton.id = "load";
loadButton.innerHTML = "Load";
canvas.appendChild(loadButton);
loadButton.addEventListener("click", loadImage);

function loadImage() {
  let boxArr = document.getElementsByClassName("box");
  for (let i = 0; i < boxArr.length; i++) {
    boxArr[i].style.backgroundColor = savedImage[i];
  }
}
