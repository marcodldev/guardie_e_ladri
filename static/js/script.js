let guardia = document.getElementById("guardia");

let ladro = document.getElementById("ladro");

let stanza = document.getElementById("stanza");

let esito = document.getElementById("esito");

let height = getComputedStyle(stanza).height;
let width = getComputedStyle(stanza).width;
let currentH = Number(height.substring(0, height.length - 2));
let currentW = Number(width.substring(0, width.length - 2));

let btnNord = document.getElementById("nord");
let btnOvest = document.getElementById("ovest");
let btnEst = document.getElementById("est");
let btnSud = document.getElementById("sud");

let contatore = 0;

btnNord.addEventListener("click", nord);
btnOvest.addEventListener("click", ovest);
btnEst.addEventListener("click", est);
btnSud.addEventListener("click", sud);


function nord() {

    let current = getComputedStyle(guardia).top;
    let guardiaTop = Number(current.substring(0, current.length - 2)) - 50;

    if (guardiaTop >= 0) {
        guardia.style.top = guardiaTop + "px";
        ladroMuove();
        contatore += 1;
    }


    controlloEsito();
}



function ovest() {
    let current = getComputedStyle(guardia).left;
    let guardiaLeft = Number(current.substring(0, current.length - 2)) - 50;


    if (guardiaLeft >= 0) {
        guardia.style.left = guardiaLeft + "px";
        ladroMuove();
        contatore += 1;
    }


    controlloEsito();
}

function est() {

    let current = getComputedStyle(guardia).left;
    let guardiaLeft = Number(current.substring(0, current.length - 2)) + 50;


    if (guardiaLeft <= currentW - 30) {
        guardia.style.left = guardiaLeft + "px";
        ladroMuove();
        contatore += 1;
    }


    controlloEsito();
}

function sud() {
    let current = getComputedStyle(guardia).top;
    let guardiaTop = Number(current.substring(0, current.length - 2)) + 50;


    if (guardiaTop <= currentH - 30) {
        guardia.style.top = guardiaTop + "px";
        ladroMuove();
        contatore += 1;
    }



    controlloEsito();
}



function ladroMuove() {
    let numeroRandom = Math.floor(Math.random() * 4);
    let current;
    let ladroTop;
    let ladroLeft;

    switch (numeroRandom) {
        case 0:
            current = getComputedStyle(ladro).top;
            ladroTop = Number(current.substring(0, current.length - 2)) + 50;


            if (ladroTop <= currentH - 30) {
                ladro.style.top = ladroTop + "px";
            }
            break;
        case 1:
            current = getComputedStyle(ladro).top;
            ladroTop = Number(current.substring(0, current.length - 2)) - 50;


            if (ladroTop >= 0) {
                ladro.style.top = ladroTop + "px";
            }
            break;
        case 2:
            current = getComputedStyle(ladro).left;
            ladroLeft = Number(current.substring(0, current.length - 2)) + 50;


            if (ladroLeft <= currentW - 30) {
                ladro.style.left = ladroLeft + "px";
            }
            break;
        case 3:
            current = getComputedStyle(ladro).left;
            ladroLeft = Number(current.substring(0, current.length - 2)) - 50;


            if (ladroLeft >= 0) {
                ladro.style.left = ladroLeft + "px";
            }
            break;


    }
}

function controlloEsito() {

    let currentGuardiaTop = getComputedStyle(guardia).top;
    let currentGuardiaLeft = getComputedStyle(guardia).left;
    let guardiaTop = Number(currentGuardiaTop.substring(0, currentGuardiaTop.length - 2));
    let guardiaLeft = Number(currentGuardiaLeft.substring(0, currentGuardiaLeft.length - 2));

    let currentLadroTop = getComputedStyle(ladro).top;
    let currentLadroLeft = getComputedStyle(ladro).left;
    let ladroTop = Number(currentLadroTop.substring(0, currentLadroTop.length - 2));
    let ladroLeft = Number(currentLadroLeft.substring(0, currentLadroLeft.length - 2));

    if (contatore != 20) {
        if (ladroTop == guardiaTop && ladroLeft == guardiaLeft) {
            console.log("beccato");
            btnNord.disabled = true;
            btnSud.disabled = true;
            btnEst.disabled = true;
            btnOvest.disabled = true;
            esito.innerHTML = "Catturato";
        }

    } else {
        console.log("Il ladro è scappato");
        btnNord.disabled = true;
        btnSud.disabled = true;
        btnEst.disabled = true;
        btnOvest.disabled = true;
        esito.innerHTML = "Il ladro è scappato";
    }

    console.log(contatore)
}

