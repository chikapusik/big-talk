const opened = document.querySelector('.opened');
const notOpened=document.querySelector('.not_opened');
const next=document.querySelector('.next');
const prev=document.querySelector('.prev');
next.addEventListener('click', goForward);
prev.addEventListener('click',goBack);
function goForward(){
    const cards = notOpened.querySelectorAll('.card');
    if (cards.length===0) return;
    const topCard=cards[0];
    opened.appendChild(topCard);

}
function goBack(){const openedCards = opened.querySelectorAll('.card');
  if (openedCards.length === 0) return;

  const lastOpenedCard = openedCards[openedCards.length - 1];
  notOpened.prepend(lastOpenedCard);}