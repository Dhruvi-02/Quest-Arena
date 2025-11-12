const giftBox= document.getElementById("giftBox");
const quote= document.getElementById("quote");

giftBox.addEventListener("click",() => {
    giftBox.classList.add("opened");

    confetti({
        particleCount: 600,
        spread: 120,
        origin: {y:0.7}
    });

    quote.style.opacity=1;
});