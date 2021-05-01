(()=> {
console.log('hey');

const wooaDiv = document.querySelector('.wooa-div');
const text = document.querySelector('.wooa__h1');
const walk = 200;
const hbCard = document.querySelector('.hb__box');
const close = document.querySelector('.close');


function shadow(e){
    const { offsetWidth: width, offsetHeight: height } = wooaDiv;
    let {offsetX: x, offsetY: y } = e;

    if(this !== e.target ) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    
    const xWalk = Math.round((x / width * walk ) - (walk / 2));
    const yWalk = Math.round((y / height * walk ) - (walk / 2));

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,1),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,1),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,1),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,1)
  `;
}

function openCard(){
    hbCard.classList.add('open');
}

function closeCard(){
    hbCard.classList.remove('open')
}

wooaDiv.addEventListener('mousemove',shadow);
text.addEventListener('click',openCard);
close.addEventListener('click', closeCard);

})();