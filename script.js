let coloringEnabled = true;

function createDivs(area = 16) {
  resetGrid();

  for (let i = 0; i < area * area; i++) {
    const div = document.createElement("div");
    div.classList.add("divs");
    document.getElementById("container").appendChild(div);
  }

  const divs = document.querySelectorAll(".divs");
  const squareDimensions = 960 / area;
  divs.forEach(function (div) {
    div.style.height = squareDimensions + "px";
    div.style.width = squareDimensions + "px";
  });
}

function resetGrid() {
  const container = document.getElementById("container");
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

function coloringMode(color) {
  const divList = document.querySelectorAll(".divs");
  divList.forEach(function (currentDiv) {
    currentDiv.addEventListener("mouseover", () => {
      if (coloringEnabled) {
        if (color === "RGB") {
          const x = Math.floor(Math.random() * 255 + 1);
          const y = Math.floor(Math.random() * 255 + 1);
          const z = Math.floor(Math.random() * 255 + 1);

          currentDiv.style.backgroundColor =
            "rgb(" + x + "," + y + "," + z + ")";
        } else if (color === "black") {
          currentDiv.style.backgroundColor = "black";
        } else if (color === "white") {
          currentDiv.style.backgroundColor = "white";
        }
      }
    });
  });
}

function toggleColoring() {
  coloringEnabled = !coloringEnabled;
}

createDivs();
coloringMode("black");

const buttonDimensions = document.querySelector(".btn_grid");
const buttonBlackColor = document.querySelector(".btn_black");
const buttonRGBColor = document.querySelector(".btn_random_rgb");
const buttonReset = document.querySelector(".btn_reset");
const buttonEraser = document.querySelector(".btn_eraser");

buttonDimensions.addEventListener("click", () => {
  let dimensions = prompt("How many divs do you want?");
  if (dimensions > 100 || dimensions < 2) {
    alert("Enter dimensions between 2 and 100");
  } else {
    createDivs(dimensions);
    coloringMode("black");
  }
});

buttonBlackColor.addEventListener("click", () => {
  coloringMode("black");
});

buttonRGBColor.addEventListener("click", () => {
  coloringMode("RGB");
});

buttonEraser.addEventListener("click", () => {
  coloringMode("white");
});

buttonReset.addEventListener("click", () => {
  createDivs();
  coloringMode("black");
});

document.querySelector("body").addEventListener("click", () => {
  toggleColoring();
});
