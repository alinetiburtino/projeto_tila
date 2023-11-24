//começo do carretel
const imgs = document.querySelectorAll(".slider img");
const dots = document.querySelectorAll(".dot");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

let currentIndex = 0;
let time = 7000; //Tempo padrão para apresentação de slides automática

const defClass = (startPos, index) => {
  for (let i = startPos; i < imgs.length; i++) {
    imgs[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  imgs[index].style.display = "block";
  dots[index].className += " active";
};

defClass(1, 0);

leftArrow.addEventListener("click", function(){
  currentIndex <= 0 ? currentIndex = imgs.length-1 : currentIndex--;
  defClass(0, currentIndex);
});

rightArrow.addEventListener("click", function(){
  currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
  defClass(0, currentIndex);
});

const startAutoSlide = () => {
  setInterval(() => {
    currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
    defClass(0, currentIndex);
  }, time);
};

startAutoSlide(); //Inicia o slideshow
//fim do carretel


//INCLUINDO O AVIÃO NO BANNER
$(document).ready(function () {
  // inicializa animação
  animateBird();
});

function makeNewPosition() {
  // Get viewport dimensions (remove the dimension of the div)
  var h = $('.banner').height() - $('.birdFloat').height();
  var w = $('.banner').width() - $('.birdFloat').width();

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];
}

function animateBird() {
  var newq = makeNewPosition();
  var oldq = $('.birdFloat').offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);

  $('.birdFloat').animate({
      top: newq[0],
      left: newq[1]
  }, speed, function () {
      animateBird();
  });
};

function calcSpeed(prev, next) {
  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);

  var greatest = x > y ? x : y;

  // modifique esse valor para modificar a velocidade da animação 
  var speedModifier = 0.1;
  var speed = Math.ceil(greatest / speedModifier);

  return speed;
}
//FIM DA INCLUSÃO

//ALTO CONTRASTE
const btnoff = document.getElementById("lampadaoff")
const btnon = document.getElementById("lampadaon")

btnoff.style.display = "none"
function darkMode() {
    let element = document.body;
    btnon.style.display = "none"
    btnoff.style.display = "flex"
    btnoff.addEventListener("click", lightMode)
    element.className = "dark-mode";
}
function lightMode() {
    let element = document.body;
    btnoff.style.display = "none";
    btnon.style.display = "flex"
    element.className = "light-mode";
}
//FIM DO ALTO CONTRASTE

