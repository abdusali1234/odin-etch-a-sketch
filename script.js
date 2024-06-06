const container = document.querySelector(".container");
const containerLength = 600;

function makeSquareGrid(gridSize) {
  container.textContent = "";

  // cell dimensions
  const cellLength = containerLength / gridSize;

  for (let i = 0; i < (gridSize * gridSize); i++){
    

    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.outline = "1px solid gray";
    cell.style.height = `${cellLength}px`;
    cell.style.width = `${cellLength}px`;
    cell.innerText = `${i+1}`;
    container.appendChild(cell);
  }
}

makeSquareGrid(16);
