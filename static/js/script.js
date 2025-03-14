let guardia = document.getElementById("guardia");

let ladro = document.getElementById("ladro");

let stanza = document.getElementById("stanza");

let esito = document.getElementById("esito");

// BOTTONI

let btnNord = document.getElementById("nord");
let btnOvest = document.getElementById("ovest");
let btnEst = document.getElementById("est");
let btnSud = document.getElementById("sud");

// FUNZIONI

btnNord.addEventListener("click", nord);
btnOvest.addEventListener("click", ovest);
btnEst.addEventListener("click", est);
btnSud.addEventListener("click", sud);


function nord(){

    
  let current = getComputedStyle(guardia).top;
  guardiaTop = Number(current.substring(0, current.length-2)) - 50;


  if(guardia.style.top == "0px"){
    guardia.style.top =  "0px";
  } else {
    guardia.style.top = guardiaTop + "px";
  }
}



function ovest(){

    let current = getComputedStyle(guardia).left;
    guardiaLeft = Number(current.substring(0, current.length-2)) - 50;
  
  
    if(guardia.style.left == "0px"){
      guardia.style.left =  "0px";
    } else {
      guardia.style.left = guardiaLeft + "px";
    }
}

function est(){

  let current = getComputedStyle(guardia).left;
  guardiaLeft = Number(current.substring(0, current.length-2)) + 50;


  if(guardia.style.left == "450px"){
    guardia.style.left =  "450px";
  } else {
    guardia.style.left = guardiaLeft + "px";
  }
}

function sud(){
    let current = getComputedStyle(guardia).top;
    guardiaTop = Number(current.substring(0, current.length-2)) + 50;
  
  
    if(guardia.style.top == "450px"){
      guardia.style.top =  "450px";
    } else {
      guardia.style.top = guardiaTop + "px";
    }
}

