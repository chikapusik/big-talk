const deck = document.querySelector('.deck');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

next.addEventListener('click', goForward);
prev.addEventListener('click', goBack);

function goForward() {
    const cards = deck.querySelectorAll('.card');
    if (cards.length === 0) return;

    const topCard = cards[0];

    topCard.classList.add("flip-out");

    setTimeout(() => {
        deck.appendChild(topCard);

        topCard.classList.remove("flip-out");
        topCard.classList.add("flip-in");

        setTimeout(() => {
            topCard.classList.remove("flip-in");
        }, 300);

    }, 300);
}

function goBack() {
    const cards = deck.querySelectorAll('.card');
    if (cards.length === 0) return;

    const lastCard = cards[cards.length - 1];

    lastCard.classList.add("flip-out");

    setTimeout(() => {
        deck.prepend(lastCard);

        lastCard.classList.remove("flip-out");
        lastCard.classList.add("flip-in");

        setTimeout(() => {
            lastCard.classList.remove("flip-in");
        }, 300);
    }, 300);
}