// Card flip by click
let cardFlip = document.querySelectorAll('.inner');
function flipCard(){
    this.classList.toggle("flip");
};

cardFlip.forEach((card) => card.addEventListener("click", flipCard));
cardFlip.forEach((card) => card.addEventListener("focus", flipCard));
cardFlip.forEach((card) => card.querySelector('.back').addEventListener("focus", flipCard));
cardFlip.forEach((card) => card.querySelector('.back').addEventListener("blur", flipCard));