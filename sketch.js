const container = document.getElementById("container");
const colorCheck = document.querySelector("#colorCheck");

function randomizeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function upOpacity(shade) {
    return shade + (1 - shade)/5;
}

function makeGrid(gridSize = 16) {
    container.style.setProperty("--grid-size", gridSize);
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div")
        row.classList.add("grid-row");
        console.log(row);
        container.appendChild(row);
        for (let j= 0; j < gridSize; j++) {
            const square = document.createElement("div");
            square.classList.add("grid-square");
            row.appendChild(square);
            if (colorCheck.checked) {
                    square.style.backgroundColor = randomizeColor();
                }
            else square.style.backgroundColor = "#F54927";
            let shade = 0; 
            square.style.opacity = 0;
            square.addEventListener("mouseenter", (e) => {
                shade = upOpacity(shade);
                e.target.style.opacity = shade;
            })
        } 
    }
}

const resetButton = document.querySelector("button");
resetButton.addEventListener("click", function onClick() {
    
    container.replaceChildren();

    let gridSize = parseInt(window.prompt("What size grid? Pick a number between 0 and 100."));

    if (isNaN(gridSize) === true) {
        window.alert("Pick a NUMBER, geez!");
        return onClick();
    }
     if (gridSize > 100) {
        window.alert("Pick a smaller number!");
        return onClick();
    }
    if (gridSize < 0) {
        window.alert("Pick a bigger number!");
        return onClick();
    }
    return makeGrid(gridSize);
})

makeGrid();