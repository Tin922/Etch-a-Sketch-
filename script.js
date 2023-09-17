function createDivs(area = 16){  
    
    resetGrid()

    for(let i = 0; i< area*area; i++){
        const div = document.createElement("div")
        
        div.classList.add("divs")
        document.getElementById("container").appendChild(div)
    }
    
    const divs = document.querySelectorAll("divs")
    divs.forEach(function (div){
        div.style.height = "100px"
        div.style.width = "100px"        
    })
}
function addEventListenerNodeList(list){
    for(let i=0; i<list.length; i++){
        list[i].addEventListener("click", (event) =>{
            list.style.backgroundColor = "red"
        })
    }
}
function resetGrid(){
    const container = document.getElementById("container")
    while(container.firstChild){
        container.removeChild(container.lastChild)
    }
}
createDivs()
const divList = document.querySelectorAll(".divs")
divList.forEach(function (currentDiv){
    currentDiv.addEventListener("mouseover", () => {
        currentDiv.style.backgroundColor = "red"
    })
})

const button = document.querySelector(".btn_grid")
button.addEventListener("click", () =>{
 
    let dimensions = prompt("how many divs you want")
    if(dimensions > 100 ||dimensions < 2) 
    alert("enter dimensions between 2 and 100")
    else    
    createDivs(dimensions)
}
)

