// Card flip by click
let cards = document.querySelectorAll('.flip-card');
for (let i = 0; i < cards.length; i++){
    cards[i].addEventListener('click', function(e){
        // Flips to the front
        e.stopPropagation();
        e.preventDefault();
        // cards[i].classList.toggle('flip');
        if (cards[i].classList.contains('flip')){
            console.log(`card ${i} should be un-flipped`);
            cards[i].classList.remove('flip');
            cards[i].querySelector('.front').classList.remove('hide');
            cards[i].querySelector('.back').style.display = "none";
            // console.log(event.bubbles);
            // event.stopPropagation();
            // console.log(event.bubbles);
        }
        // Flips to show back
        else if (!cards[i].classList.contains('flip')){
            console.log(`card ${i} should be flipped`);
            cards[i].classList.add('flip');
            cards[i].querySelector('.front').classList.add('hide');
            cards[i].querySelector('.back').style.display = "flex";
            // console.log(event.bubbles);
            // event.preventDefault();
            // console.log(event.bubbles);
        }
    }, false);
    cards[i].querySelector('.inner').addEventListener('focus', function(){
        // Flips to the front
        if (cards[i].classList.contains('flip')){
            cards[i].classList.remove('flip');
            cards[i].querySelector('.front').classList.remove('hide');
            cards[i].querySelector('.back').style.display = "none";
        }
        // Flips to show back
        else{
            cards[i].classList.add('flip');
            cards[i].querySelector('.front').classList.add('hide');
            cards[i].querySelector('.back').style.display = "flex";
        }
    });
    cards[i].querySelector('.inner').addEventListener('blur', function(){
        // Flips to the front
        if (cards[i].classList.contains('flip')){
            cards[i].classList.remove('flip');
            cards[i].querySelector('.front').classList.remove('hide');
            cards[i].querySelector('.back').style.display = "none";
        }
        // Flips to show back
        else{
            cards[i].classList.add('flip');
            cards[i].querySelector('.front').classList.add('hide');
            cards[i].querySelector('.back').style.display = "flex";
        }
    });
};

