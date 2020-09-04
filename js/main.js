const form = document.querySelector("#form");
const dynamicBlock = document.querySelector(".dynamic-block");
const root = document.documentElement;

function makeColsAndRows(rows, cols) {
  // So it doesn't add a div inside the entire block, adding a border and reducing  the size of the block
  if (rows > 1 || cols > 1) {
    // Clear all the divs inside the block
    dynamicBlock.innerHTML = "";

    // Set the value of the CSS variables
    // Define amount of columns/rows for the block - this will position the divs inside it
    root.style.setProperty("--grid-rows", rows);
    root.style.setProperty("--grid-columns", cols);

    // Create divs for the amount of rows/cols the user chose
    // Position
    for (let line = 0; line < cols * rows; line++) {
      let cell = document.createElement("div");

      dynamicBlock.appendChild(cell).className = "grid-line";
    }
  }
}

function handleAddLines(e) {
  e.preventDefault();

  // Get value provided by the user
  const cols = document.querySelector("#col").value;
  const rows = document.querySelector("#row").value;

  makeColsAndRows(rows, cols);
}

form.addEventListener("submit", handleAddLines);
