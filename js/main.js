const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

const menu = document.querySelector('.main');

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    document.querySelector('.menu').classList.add('open');
    menuOpen = true;
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflowY = "scroll"
    menuBtn.classList.remove('open');
    menuOpen = false;
    document.querySelector('.menu').classList.remove('open');
  }
});
