const div = document.getElementById("taste");
const div2 = document.getElementById("ecran");
const ecran = document.createElement("div");
let number = 1;
let numar = 0;
let semn = "";
let calcul = undefined;
let contor_operatii = 0;
let termen1;
let termen2;
let ok;
ecran.textContent = 0;

for(let i = 0; i < 4; i++){
    for(let j = 0; j < 4; j++){
    const buton = document.createElement("div");
    buton.style.boxSizing = "border-box";
    buton.style.border = "1px solid black";
    buton.style.height = "75px";
    buton.style.width= "75px";
    if(j == 3 && i == 0){
        buton.textContent = "+";
        buton.style.backgroundColor = "orange";
    } else if( j == 3 && i == 1){
        buton.textContent = "-";
        buton.style.backgroundColor = "orange";
    } else if(j == 3 && i == 2){
        buton.textContent = "/";
        buton.style.backgroundColor = "orange";
    } else if( j == 3 && i == 3){
        buton.textContent = "*";
        buton.style.backgroundColor = "orange";
        buton.style.borderBottomRightRadius = "4px";
        buton.style.borderBottomLeftRadius = "0";
    }else if(j == 0 && i == 3){
        buton.textContent = "0";
        buton.style.borderBottomRightRadius = "0";
        buton.style.borderBottomLeftRadius = "4px";
    } else if(j == 1 && i == 3){
        buton.textContent = "<=";
        buton.style.backgroundColor = "orange";
    }
    else if(j == 2 && i == 3){
        buton.textContent = "=";
        buton.style.backgroundColor = "orange";
    }
    else {
        buton.textContent = number;
        number++;
    }

    buton.style.fontSize = "60px";
    div.appendChild(buton);
   
    div2.appendChild(ecran);


    buton.addEventListener("click", function(){
      //5 + 7 
  
        if(numar < 10000000 && !isNaN(parseInt(buton.textContent))){
            numar = numar * 10 + parseInt(buton.textContent);
            ecran.textContent = numar;
           }

        if(isNaN(buton.textContent) && buton.textContent !== "=" && isNaN(calcul)){
            termen1 = numar;
            numar = 0;
            semn = buton.textContent;
        } else if(isNaN(buton.textContent) && buton.textContent !== "="){
            semn = buton.textContent;
        }
        if(buton.textContent === "<="){
            ecran.textContent = Math.floor(parseInt(ecran.textContent) / 10);
        }

        if(buton.textContent === "="){
            termen2 = numar;
            console.log(termen1);
            console.log(termen2);
            switch(semn){
                case "+":
                    calcul = suma(termen1,termen2);
                    break;
                case "-":
                    calcul = diferenta(termen1, termen2);
                    break;
                case "*":
                    calcul = inmultire(termen1,termen2);
                    break;
                case "/":
                    calcul = impartire(termen1,termen2);
                    break;
                case "%":
                    calcul = rest(termen1,termen2);
                    break;
            }
            console.log(calcul);
             if(calcul !== Math.floor(calcul)){
            ecran.textContent = calcul.toFixed(2);
             } else {
                ecran.textContent = calcul;
             } 
            termen1 = calcul;
            numar = 0;
        }
       
        div2.appendChild(ecran);      

    })



} 

    
}


function suma(a,b){
    return a + b;
}
function diferenta(a,b){
    return a - b;
}
function inmultire(a,b){
    return a * b;
}
function impartire(a,b){
    return a / b;
}
function rest(a,b){
    return a % b;
}
