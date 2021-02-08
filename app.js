//Movement Animation to happen

const minSelector = ".card__body"
const cardSelector = ".card"
const card = document.querySelectorAll(minSelector);



card.forEach(e=>{
  e.addEventListener('mousemove', function (e) {
    let card = e.target.closest(minSelector)
    let xAxis = (e.clientX - window.innerWidth / 2) / 85;
    let yAxis = (e.clientY - window.innerHeight / 2) / 55;
    card.querySelector(cardSelector).style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  })
  e.addEventListener('mouseenter', function (e) {
    let card = e.target.querySelector(cardSelector)
    card.style.transition = "none";
    card.querySelector('.title').style.transform = "translateZ(50px)";
    card.querySelector('.sneaker img').style.transform = "translateZ(50px) rotateZ(-15deg)";
    card.querySelector('.info h3').style.transform = "translateZ(50px)";
    card.querySelector('.sizes').style.transform = "translateZ(50px)";
    card.querySelector('.purchase').style.transform = "translateZ(30px)";
  })
  e.addEventListener('mouseleave', function (e) {
     let card = e.target.querySelector(cardSelector)
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.querySelector('.title').style.transform = "translateZ(0px)";
    card.querySelector('.sneaker img').style.transform = "translateZ(0px) rotateZ(0deg)";
    card.querySelector('.info h3').style.transform = "translateZ(0px)";
    card.querySelector('.sizes').style.transform = "translateZ(0px)";
    card.querySelector('.purchase').style.transform = "translateZ(0px)";
  })
})

