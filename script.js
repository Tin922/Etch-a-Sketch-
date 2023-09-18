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

function coloringMode(color = "black") {
  const divList = document.querySelectorAll(".divs");
  divList.forEach(function (currentDiv) {
    currentDiv.addEventListener("mouseover", () => {
      if (color !== "black") {
        const x = Math.floor(Math.random() * 255 + 1);
        const y = Math.floor(Math.random() * 255 + 1);
        const z = Math.floor(Math.random() * 255 + 1);

        currentDiv.style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
      } else {
        currentDiv.style.backgroundColor = "black";
      }
    });
  });
}
createDivs();
coloringMode();

const buttonDimensions = document.querySelector(".btn_grid");
const buttonBlackColor = document.querySelector(".btn_black");
const buttonRGBColor = document.querySelector(".btn_random_rgb");
const buttonReset = document.querySelector(".btn_reset");

buttonDimensions.addEventListener("click", () => {
  let dimensions = prompt("how many divs you want");
  if (dimensions > 100 || dimensions < 2)
    alert("enter dimensions between 2 and 100");
  else {
    createDivs(dimensions);
    coloringMode();
  }
});

buttonBlackColor.addEventListener("click", () => coloringMode("black"));
buttonRGBColor.addEventListener("click", () => coloringMode("RGB"));
buttonReset.addEventListener("click", () => {
  createDivs();
  coloringMode();
});
