let guardia = document.getElementById("guardia");

let ladro = document.getElementById("ladro");

let stanza = document.getElementById("stanza");

let esito = document.getElementById("esito");

let height = getComputedStyle(stanza).height;
let width = getComputedStyle(stanza).width;
let currentH = Number(height.substring(0, height.length-2));
let currentW = Number(width.substring(0, width.length-2));

let btnNord = document.getElementById("nord");
let btnOvest = document.getElementById("ovest");
let btnEst = document.getElementById("est");
let btnSud = document.getElementById("sud");



btnNord.addEventListener("click", nord);
btnOvest.addEventListener("click", ovest);
btnEst.addEventListener("click", est);
btnSud.addEventListener("click", sud);


function nord(){
    
    let current = getComputedStyle(guardia).top;
    let guardiaTop = Number(current.substring(0, current.length-2)) - 50;

    if (guardiaTop >= 0) {
        guardia.style.top = guardiaTop + "px";
    }
    controlloEsito(); 
  }
  


function ovest(){
    let current = getComputedStyle(guardia).left;
    let guardiaLeft = Number(current.substring(0, current.length-2)) - 50;
  
  
    if(guardiaLeft >= 0){
        guardia.style.left = guardiaLeft + "px";
    }
    controlloEsito();
}

function est(){

    let current = getComputedStyle(guardia).left;
    let guardiaLeft = Number(current.substring(0, current.length-2)) + 50;


  if(guardiaLeft <= currentW - 30){
        guardia.style.left = guardiaLeft + "px";
        controlloEsito();
  }
}

function sud(){
    let current = getComputedStyle(guardia).top;
    let guardiaTop = Number(current.substring(0, current.length-2)) + 50;


    if (guardiaTop <= currentH - 30)
        guardia.style.top = guardiaTop + "px";
    controlloEsito();
  }