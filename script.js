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

    lastCard.classList.add("flip-back-out");

    setTimeout(() => {
        deck.prepend(lastCard);

        lastCard.classList.remove("flip-back-out");
        lastCard.classList.add("flip-back-in");

        setTimeout(() => {
            lastCard.classList.remove("flip-back-in");
        }, 300);
    }, 300);
}

const snowContainer = document.querySelector('.snow');
const snowflakeCount = 80; 

for(let i = 0; i < snowflakeCount; i++){
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄'; 

    snowflake.style.left = Math.random() * 100 + 'vw';


    snowflake.style.fontSize = 10 + Math.random() * 20 + 'px';

  
    snowflake.style.animationDuration = 4 + Math.random() * 6 + 's';


    snowflake.style.animationDelay = Math.random() * 5 + 's';


    snowflake.style.setProperty('--x-move', (Math.random() * 100 - 50) + 'px');
    snowflake.style.setProperty('--rotate', (Math.random() * 360) + 'deg');

    snowContainer.appendChild(snowflake);
}