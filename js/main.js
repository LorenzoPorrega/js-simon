'use strict'

//TRUE GIVEN EXERCISE

//I establish a setInterval, that runs each second, with a function inside
const updater = setInterval(function(){
    //I establish some const's to get the countdown goal date and the DOM element where to print results
    const correctionCountdown = new Date("July 14, 2023 09:30:00").getTime();
    const blockContainer = document.querySelector(".block-container");
    const heading = document.querySelector(".heading");

    //I get the current date in milliseconds and I subtract the countdown goal date with the current date
    const now = new Date().getTime();
    const difference = correctionCountdown - now;

    /*I calculate the days, hours, minutes and seconds from the milliseconds difference from countdown goal
    and the current date to find how many days, hours, minutes and seconds are missing to the countdwon
    global */
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    //Here I print the results from above calculated results and the following functions
    blockContainer.innerHTML = `Mancano: ${days} giorni ${hours} ${pluralValidator()} ${minutes} minuti ${seconds} secondi`;
    heading.innerHTML = `COUNTDOWN ALL'INIZIO DELLA LEZIONE DI ${dayValidator()}`;

    /*I establish an if block to get a "TIME EXPIRED" text instead of a negative countdown if we reach and/or
    got beyond the countdown goal*/
    if (difference <= 0){
        blockContainer.innerHTML = `<span class="text-danger fs-1 fw-bold">TEMPO SCADUTO!<span>`;
        clearInterval(updater);
        console.log("If this message doesn't repeats >1 time in console it means the countdown has ran out and also it means the setInterval has stopped right here");
    }

    /*I build a validator to check if the hour missing is >1 or equal to 0 so I print the singular form of
    "hours" in Italian otherwise I keep it in plural form*/
    function pluralValidator(){
        const oreOppureOra = [];
        if(hours == 0 || hours > 1){
            oreOppureOra.push("ore");
        }
        else{
            oreOppureOra.push("ora");
        }
        return oreOppureOra
    }

    /*I do the same as the function pluralValidator with the "OGGI", today, if today's date number is equal to 14
    or with "DOMANI", tomorrow, if today's date number !14 to have more appropriate text description*/
    function dayValidator(){
        let countdownDay = "";
        if(new Date().getDate() == 14){
            countdownDay = "OGGI";
        }
        else{
            countdownDay = "DOMANI";
        }
        return countdownDay
    }
}, 1000);


//COLLABORATIVE PRACTICE TO EXERCISE WORKING WITH JS AND FUNCTION
const btn = document.querySelector(".btn");
const selectedDate = document.getElementById("selected-date");
let selectedDateValue = selectedDate.value;

let getDay = new Date().getDate();
let getMonth = new Date().getMonth()+1;
getMonth = getUTC(getMonth);
let getYear = new Date().getFullYear();
let now = `${getYear}-${getMonth}-${getDay}`

function getUTC (x){
    if(x < 10){
        x = `0${x}`;
    }
    return x
}

const attribute = document.createAttribute("min");
attribute.value = now;
selectedDate.setAttributeNode(attribute);

btn.addEventListener("click", function(){
    selectedDateValue = selectedDate.value;
    
    clearInterval(intervalCustom);
    intervalCustom();
});

function intervalCustom(){
    const custom = setInterval(function(){
        
        getDay = new Date().getDate();
        let getMonth = new Date().getMonth()+1;
        getMonth = getUTC(getMonth);
        getYear = new Date().getFullYear();
        now = `${getYear}-${getMonth}-${getDay}`
        const currentMilliseconds = new Date().getTime();
        const selectedDateMilliseconds = new Date(selectedDateValue).getTime();
        console.log(currentMilliseconds)
        console.log(selectedDateMilliseconds)
    
        

        if(selectedDate !== undefined){
            clearInterval(intervalCustom);
        }
        
        const selectedDateBox = document.querySelector(".selected-date-box");
        const mancano = document.querySelector(".manca-no");
        const customTimer = document.querySelector(".custom-timer");
        const difference = selectedDateMilliseconds - currentMilliseconds;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));

        const correctDays = [];
        if(days == 0 || days > 1){
            correctDays.push("giorni");
        }
        else{
            correctDays.push("giorno");
        }

        let correctDaysLeft = "";
        if(days == 0 || days > 1){
            correctDaysLeft = "mancano";
        }
        else{
            correctDaysLeft = "manca";
        }

        if (difference <= 0 || days == 0){
            selectedDateBox.innerHTML = `<span class="text-danger fs-1 fw-bold">LA DATA È TROPPO VICINA!<span>`;
        }

        customTimer.innerHTML = `${days} ${correctDays}`;
        mancano.innerHTML = `${correctDaysLeft}`;

        function getUTC (x){
            if(x < 10){
                x = `0${x}`;
            }
            return x
        }
    }, 1000);
    
}


