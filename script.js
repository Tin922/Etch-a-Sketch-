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

function coloringMode() {
  const divList = document.querySelectorAll(".divs");
  divList.forEach(function (currentDiv) {
    currentDiv.addEventListener("mouseover", () => {
      currentDiv.style.backgroundColor = "black";
    });
  });
}
createDivs();
coloringMode();

const button = document.querySelector(".btn_grid");
button.addEventListener("click", () => {
  let dimensions = prompt("how many divs you want");
  if (dimensions > 100 || dimensions < 2)
    alert("enter dimensions between 2 and 100");
  else {
    createDivs(dimensions);
    coloringMode();
  }
});
