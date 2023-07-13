'use strict'

const updater = setInterval(function(){
    const correctionCountdown = new Date("July 13, 2023 17:45:00").getTime();
    const blockContainer = document.querySelector(".block-container");

    const now = new Date().getTime();
    const difference = correctionCountdown - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    const oreOppureOra = [];

    if(hours = 0 || hours > 1){
        oreOppureOra.push("ore");
    }
    else{
        oreOppureOra.push("ora");
    }

    blockContainer.innerHTML = `Mancano: ${days} giorni ${hours} ${oreOppureOra} ${minutes} minuti ${seconds} secondi`;

    if (difference <= 0){
        blockContainer.innerHTML = `<span class="text-danger fs-1 fw-bold">TEMPO SCADUTO!<span>`;
        clearInterval(updater);
    }
    console.log("If this message doesn't repeats >1 time in console it means the countdown has ran out and also it means the setInterval has stopped right here")
}, 1000);

