//canvas
let canvas = document.createElement("div");
canvas.id = "canvas";
pixelPainter.appendChild(canvas);

for (x = 0; x < 10; x++) {
  //row
  let row = document.createElement("div");
  row.className = "row";
  canvas.appendChild(row);

  for (y = 0; y < 10; y++) {
    //boxes
    let box = document.createElement("div");
    box.className = "column";
    row.appendChild(box);
  }
}
