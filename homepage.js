function playerName(event) {
    event.preventDefault();

    let pName= document.getElementById("pName").value;

    if(pName=="") {
        alert("Please enter Player-name")
    }
    else {
        alert(`Welcome ${pName}!
Let's dive into some fun zone!`)
        window.location.href="game.html"
    }
}