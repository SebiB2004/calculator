const div = document.getElementById("taste");
const div2 = document.getElementById("ecran");
const ecran = document.createElement("div");
let number = 1;
let numar = 0;
let semn = "";
let calcul = undefined;
let contor_operatii = 0;
let termeni = [];
let ok = 1;
let i = 0;
ecran.textContent = 0;
let termen;
let rezultat = "";

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        const buton = document.createElement("div");
        buton.style.boxSizing = "border-box";
        buton.style.border = "1px solid black";
        buton.style.height = "75px";
        buton.style.width = "75px";

        if (j == 3 && i == 0) {
            buton.textContent = "+";
            buton.style.backgroundColor = "orange";
        } else if (j == 3 && i == 1) {
            buton.textContent = "-";
            buton.style.backgroundColor = "orange";
        } else if (j == 3 && i == 2) {
            buton.textContent = "/";
            buton.style.backgroundColor = "orange";
        } else if (j == 3 && i == 3) {
            buton.textContent = "*";
            buton.style.backgroundColor = "orange";
            buton.style.borderBottomRightRadius = "4px";
            buton.style.borderBottomLeftRadius = "0";
        } else if (j == 0 && i == 3) {
            buton.textContent = "0";
            buton.style.borderBottomRightRadius = "0";
            buton.style.borderBottomLeftRadius = "4px";
        } else if (j == 1 && i == 3) {
            buton.textContent = "<=";
            buton.style.backgroundColor = "orange";
        } else if (j == 2 && i == 3) {
            buton.textContent = "=";
            buton.style.backgroundColor = "orange";
        } else {
            buton.textContent = number;
            number++;
        }

        buton.style.fontSize = "60px";
        div.appendChild(buton);

        div2.appendChild(ecran);

        buton.addEventListener("click", function () {
            if (numar < 10000000 && !isNaN(parseInt(buton.textContent))) {
                numar = numar * 10 + parseInt(buton.textContent);
                ecran.textContent = numar;
            }

            if (isNaN(buton.textContent) && buton.textContent !== "=" && buton.textContent !== "<=") {
                termeni.push(numar);
                termeni.push(buton.textContent);
                numar = 0;
            }
            
            if (buton.textContent === "<=") {
                location.reload();
               
            }

            if (buton.textContent === "=") {
                termeni.push(numar);
                rezultat = termeni[0];
                for(let i = 1; i <= termeni.length && ok == 1; i+=2){
                   semn = termeni[i];
                   termen = termeni[i+1];
                   if(i % 2 == 0 && isNaN(termeni[i])){
                     ok = -1;
                     console.log(ok);
                   }
                switch (semn) {
                    case "+":
                      rezultat = suma(rezultat,termen);
                        break;
                    case "-":
                        rezultat = diferenta(rezultat,termen);
                        break;
                    case "*":
                        rezultat = inmultire(rezultat,termen);
                        break;
                    case "/":
                        if(termen == 0){
                            ok = -1;
                        } else {
                        rezultat = impartire(rezultat,termen);
                        }
                        break;
                    case "%":
                        rezultat = rest(rezultat,termen);
                        break;
                }
            }
        if(ok != -1){
            if(rezultat < 100000000 && rezultat > -100000000){

                    if (rezultat !== Math.floor(rezultat)) {
                    ecran.textContent = rezultat.toFixed(2);
                    } else {
                    ecran.textContent = rezultat;
                    }

                numar = 0;
                semn = "";

            } else 
                ecran.textContent = "Error";

            } else {
                ecran.textContent = "ERROR";
                ok = 1;
            }
        termeni = [rezultat, buton.textContent]; // primele doua pozitii din noul vector sunt rezultatul si semnul pentru a evita ca la viitorul loop termenul sa fie chiar semnul: 
                                                   // [rezultat,semn,rezultat,semn ...]
        }
        

            div2.appendChild(ecran);
        });
    }
}

function suma(a, b) {
    return a + b;
}
function diferenta(a, b) {
    return a - b;
}
function inmultire(a, b) {
    return a * b;
}
function impartire(a, b) {
    return a / b;
}
function rest(a, b) {
    return a % b;
}
