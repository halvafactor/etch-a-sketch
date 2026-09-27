const resetButton = document.querySelector("button");
resetButton.addEventListener("click", () => {
    let gridSize = parseInt(window.prompt("What size grid? Pick a number between 0 and 100."));

    if (isNaN(gridSize) === true) {
        window.alert("Pick a NUMBER, geez!");
        window.prompt("What size grid? Pick a number between 0 and 100.")
    } else if (gridSize > 100) {
        window.alert("Pick a smaller number!");
        window.prompt("What size grid? Pick a number between 0 and 100.");
    } else if (gridSize < 0) {
        window.alert("Pick a bigger number!");
        window.prompt("What size grid? Pick a number between 0 and 100.");
    } else {
        const container = document.getElementById("container");
        container.style.setProperty("--grid-size", gridSize);
        for (let i = 0; i < gridSize; i++) {
            const container = document.getElementById("container");
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
    }
})