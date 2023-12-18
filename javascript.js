const div = document.getElementById("calculator");
let number = 0;
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
    const buton = document.createElement("div");
    buton.style.boxSizing = "border-box";
    buton.style.border = "1px solid black";
    buton.style.height = "100px";
    buton.style.width= "100px";
    buton.textContent = number;
    buton.style.fontSize = "60px";
    number++;
    div.appendChild(buton);
}
}

