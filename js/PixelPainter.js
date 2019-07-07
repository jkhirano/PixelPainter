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
  }
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

  // boxes
  for (a = 0; a < 10; a++) {
    let colorBox = document.createElement("div");
    colorBox.className = "colorBox";
    colorRow.appendChild(colorBox);
  }
}
