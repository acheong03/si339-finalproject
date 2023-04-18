// Card flip by click
let cards = document.querySelectorAll('.flip-card');
function flipCard(e){
    this.classList.toggle("flip");
};

cards.forEach((card) => card.addEventListener("click", flipCard));
cards.forEach((card) => card.addEventListener("focus", flipCard));
cards.forEach((card) => card.addEventListener("blur", flipCard));

