const resetButton = document.querySelector("button");
resetButton.addEventListener("click", function onClick() {
    
    const container = document.getElementById("container");
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
            square.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "#F54927";
            })
        } 
    }
})

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div")
    row.classList.add("grid-row");
    console.log(row);
    container.appendChild(row);
    for (let j= 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        row.appendChild(square);
        square.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "#F54927";
        })
    } 
}