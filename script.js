const container = document.querySelector(".container");
const containerLength = 600;

const normalBtn = document.querySelector("#normal");
const rainbowBtn = document.querySelector("#rainbow");
const eraseBtn = document.querySelector('#erase');
const changeSizeBtn = document.querySelector('#change-size');

let paintMode = "normal";

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
    container.appendChild(cell);

    cell.addEventListener("mouseover", () => {
      if (paintMode === "normal"){
        cell.style.backgroundColor = "black";
      } else if (paintMode === "erase"){
        cell.style.backgroundColor = "";
      } else if (paintMode === "rainbow"){
        const randR = Math.floor(Math.random()*256);
        const randG = Math.floor(Math.random()*256);
        const randB = Math.floor(Math.random()*256); 
        const randomColor = `rgb(${randR},${randG},${randB})`;
        cell.style.backgroundColor = randomColor;
      }
    } );
  }
}

normalBtn.addEventListener("click", () => {
  paintMode = "normal";
})

rainbowBtn.addEventListener("click", () => {
  paintMode = "rainbow";
})

eraseBtn.addEventListener("click", () => {
  paintMode = "erase";
})

changeSizeBtn.addEventListener("click", () => {


  let userSizeChoice = prompt("Enter a new grid size (1-100): ");
  if (userSizeChoice > 100 || userSizeChoice < 1){
    alert("Grid size must be between 1 & 100!");
  } else {
    makeSquareGrid(userSizeChoice);
  }
})
makeSquareGrid(16);



