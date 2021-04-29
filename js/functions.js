
let mainDeck = ["card-a", "card-a", "card-b", "card-b", "card-c", "card-c", "card-d", "card-d", "card-e", "card-e", "card-f", "card-f", "card-g", "card-g", "card-h", "card-h", "card-i", "card-i", "card-j", "card-j"];
mainDeck = mainDeck.sort(() => Math.random() - 0.5);
let compArr = [];


document.getElementById("play").addEventListener("click",function (){
    location.reload();

});

startgame();


//start the game by adding random colors to the cards by adding random classes.
function startgame() {
    Array.from(document.querySelectorAll("div.cards-inner")).forEach((card, i) => {
        card.classList.add(mainDeck[i]);
        card.classList.add("card-hidden");
    });

}


// event click on card, get id and perform action.
Array.from(document.querySelectorAll("div.cards-inner")).forEach(function ($btn, i) {
    $btn.addEventListener("click", function () {

        $btn.classList.remove("card-hidden");
        compArr.push($btn.classList[1]);
        if (compArr.length === 2) {
            compare($btn)
        }


    });
});

function compare($btn) {

    if (compArr[0] === compArr[1]) {
        setTimeout(function () {
            ifequal($btn);
        }, 500);
    } else {
        setTimeout(function () {
            turnAround($btn);
        }, 1000);

    }
}

function ifequal() {
    Array.from(document.getElementsByClassName(compArr[0])).forEach((elem) => {
        elem.classList.add("correct");
    });
    compArr = [];
}

//turn all cards around
function turnAround($btn) {
    Array.from(document.getElementsByClassName(compArr[0])).forEach((elem) => {
        elem.classList.add("card-hidden");
    });
    Array.from(document.getElementsByClassName(compArr[1])).forEach((elem) => {
        elem.classList.add("card-hidden");
    });
    compArr = [];
}

