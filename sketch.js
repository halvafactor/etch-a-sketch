for (let i = 0; i < 16; i++) {
    const container = document.getElementById("container");
    const row = document.createElement("div")
    row.classList.add("grid-row");
    console.log(row);
    container.appendChild(row);
    for (let j= 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        row.appendChild(square);
        square.addEventListener("mouseenter", (e) => {
            square.style.backgroundColor = "yellow";
        })
    }
}