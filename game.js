alert("Welcome to 'QUEST ARENA!' Buckle up - your brain's about to do some heavy lifting! Here are four cards and behind each card is a clue which gives an answer. With four cards you will get four answers which are connected to each other and refers to a random single word and that random single word is the code. Let's see if you can crack it! Also, if you can make it then a surprise is waiting for you at the end!")
function flipcard(card) {
    card.classList.toggle('flipped');
}

function check() {
    let a= "Christmas";
    let ans= document.getElementById("ans").value;

    if(ans===a){
        alert("HO HO HO!...You actually got it! Good one!")
        window.location.href="conclude.html"
    }
    else if(ans==""){
        alert("Wow...a ghost answer? Spooky, but invalid")
    }
    else {
        alert("Your answer just slipped on ice and fell - maybe give it another go...")
    }
}