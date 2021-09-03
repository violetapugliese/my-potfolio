var btnFrontDev = document.querySelector('.btn-front-dev');
var btnDev = document.querySelector('.btn-dev');
var btnFrontProfile = document.querySelector('.btn-front-profile');
var btnProfile = document.querySelector('.btn-profile');
var btnFrontArt = document.querySelector('.btn-front-art');
var btnArt = document.querySelector('.btn-art');

btnFrontDev.addEventListener("click", moveBtnDev);
btnFrontProfile.addEventListener("click", moveBtnProfile);
btnFrontArt.addEventListener("click", moveBtnArt);
function moveBtnDev(){
    btnDev.classList.toggle('animation-btn-x')
    setTimeout(() => {
        btnDev.classList.toggle('animation-btn-y');
        btnProfile.classList.toggle('animation-btn-out')
        btnArt.classList.toggle('animation-btn-out')
      }, 800)   
}
function moveBtnProfile(){
        btnProfile.classList.toggle('animation-btn-x');  
        btnDev.classList.toggle('animation-btn-out')
        btnArt.classList.toggle('animation-btn-out')

    }
function moveBtnArt(){
    btnArt.classList.toggle('animation-btn-x')
    setTimeout(() => {
        btnArt.classList.toggle('animation-btn-y');
        btnDev.classList.toggle('animation-btn-out')
        btnProfile.classList.toggle('animation-btn-out')
      }, 800)    
}