let savedColor;

//canvas
let canvas = document.createElement("div");
canvas.id = "canvas";
pixelPainter.appendChild(canvas);

//rows
for (x = 0; x < 10; x++) {
  let row = document.createElement("div");
  row.className = "row";
  canvas.appendChild(row);

  //boxes
  for (y = 0; y < 10; y++) {
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

//row
for (z = 0; z < 1; z++) {
  let colorRow = document.createElement("div");
  colorRow.className = "colorRow";
  colorPicker.appendChild(colorRow);

  //boxes
  let colors = [
    "Moccasin",
    "salmon",
    "lavender",
    "powderBlue",
    "DarkSlateBlue",
    "turquoise",
    "tomato",
    "tan",
    "rosyBrown",
    "lightSeaGreen"
  ];

  for (a = 0; a < 10; a++) {
    let colorBox = document.createElement("div");
    colorBox.className = "colorBox";
    colorRow.appendChild(colorBox);
    colorBox.style.backgroundColor = colors[a];
    colorBox.addEventListener("click", storeColor);
  }

  function storeColor() {
    savedColor = this.style.backgroundColor;
    // console.log(savedColor);
  }
}
