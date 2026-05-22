let punti = 0;

let tempo = 10;

let timer;

let partito = false;

let pausa = false;




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




document.getElementById("rosso").onclick = function(){

    if(tempo > 0){

        punti++;

        document.getElementById("punti").innerHTML = punti;


        let x = Math.floor(Math.random() * 12) * 40;

        let y = Math.floor(Math.random() * 12) * 40;

        document.getElementById("rosso").style.left = x + "px";

        document.getElementById("rosso").style.top = y + "px";

        if(partito == false){

            partito = true;

            avviaTimer();

        }

    }

}




document.getElementById("pausa").onclick = function(){

    if(pausa == false){

        pausa = true;

    }
    else{

        pausa = false;

    }

}




document.getElementById("restart").onclick = function(){

    location.reload();

}




document.getElementById("info").onclick = function(){

    document.getElementById("popup").style.display = "flex";

}




document.getElementById("chiudi").onclick = function(){

    document.getElementById("popup").style.display = "none";

}