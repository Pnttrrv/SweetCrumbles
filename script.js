const toggle = document.querySelector('.menu-toggle input');
const list = document.querySelector('.menu-list');
const lsmenu = document.querySelectorAll('.ls-menu');
const cookies = document.querySelector('.coo');
const fudgy = document.querySelector('.fud');
const tart = document.querySelector('.tar');
const pchoc = document.querySelector('.pc');
const bun = document.querySelector('.pk');
const icons = document.querySelectorAll('.product .icon');
const info = document.querySelectorAll('.product #infoo');
const infocoo = document.querySelector('.product .info.coo');
const infofud = document.querySelector('.product .info.fud');
const infotar = document.querySelector('.product .info.tar');
const infopc = document.querySelector('.product .info.pc');
const infobun = document.querySelector('.product .info.pk');

// hamburger menu
toggle.addEventListener('click', function () {
  list.classList.toggle('slide-down');
});

lsmenu.forEach((listmenu) => {
  listmenu.addEventListener('click', function () {
    list.classList.toggle('slide-down');
    toggle.checked = false;
  });
});

// adding class show-details in each info
cookies.addEventListener('click', function () {
  infocoo.classList.add('show-details');
});

fudgy.addEventListener('click', function () {
  infofud.classList.add('show-details');
});

tart.addEventListener('click', function () {
  infotar.classList.add('show-details');
});

pchoc.addEventListener('click', function () {
  infopc.classList.add('show-details');
});

bun.addEventListener('click', function () {
  infobun.classList.add('show-details');
});

// remove class show-details
info.forEach((inpo) => {
  inpo.addEventListener('click', function () {
    inpo.classList.remove('show-details');
  });
});
