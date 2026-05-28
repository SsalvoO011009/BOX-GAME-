let punti = 0;

let tempo = 10;

let timer;

let partito = false;

let pausa = false;


/* Lista colori */
let colori = [

    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "cyan",
    "lime",
    "gold"

];


/* Prende il quadrato */
let rosso = document.getElementById("rosso");


/* Colore iniziale casuale */
cambiaColore();


function cambiaColore(){

    let numero = Math.floor(Math.random() * colori.length);

    rosso.style.background = colori[numero];

}


/* Timer */
function avviaTimer(){

    timer = setInterval(function(){

        if(pausa == false){

            tempo--;

            document.getElementById("tempo").innerHTML = tempo;

            if(tempo <= 0){

                clearInterval(timer);

                document.getElementById("fine").innerHTML =
                "<p style='color:red;'>PUNTI: " + punti + "</p>";

            }

        }

    },1000);

}


/* Click sul quadrato */
rosso.onclick = function(){

    if(tempo > 0){

        punti++;

        document.getElementById("punti").innerHTML = punti;


        /* Cambia colore */
        cambiaColore();


        /* Posizione casuale */
        let x = Math.floor(Math.random() * 12) * 40;

        let y = Math.floor(Math.random() * 12) * 40;

        rosso.style.left = x + "px";

        rosso.style.top = y + "px";


        /* Avvia timer */
        if(partito == false){

            partito = true;

            avviaTimer();

        }

    }

}


/* Pausa */
document.getElementById("pausa").onclick = function(){

    if(pausa == false){

        pausa = true;

    }
    else{

        pausa = false;

    }

}


/* Restart */
document.getElementById("restart").onclick = function(){

    location.reload();

}


/* Popup info */
document.getElementById("info").onclick = function(){

    document.getElementById("popup").style.display = "flex";

}


/* Chiudi popup */
document.getElementById("chiudi").onclick = function(){

    document.getElementById("popup").style.display = "none";

}
