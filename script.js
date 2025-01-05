const toggle = document.querySelector('.menu-toggle input');
const list = document.querySelector('.menu-list');
const home = document.querySelector('.home');
const prods = document.querySelector('.prods');
const testi = document.querySelector('.testi');
const contact = document.querySelector('.kontak');
const cookies = document.querySelector('.coo');
const fudgy = document.querySelector('.fud');
const tart = document.querySelector('.tar');
const pchoc = document.querySelector('.pc');
const bun = document.querySelector('.pk');
const infocoo = document.querySelector('.product .info.coo');
const infofud = document.querySelector('.product .info.fud');
const infotar = document.querySelector('.product .info.tar');
const infopc = document.querySelector('.product .info.pc');
const infobun = document.querySelector('.product .info.pk');

toggle.addEventListener('click', function () {
  list.classList.toggle('slide-down');
});

home.addEventListener('click', function () {
  list.classList.toggle('slide-down');
  toggle.checked = false;
});

prods.addEventListener('click', function () {
  list.classList.toggle('slide-down');
  toggle.checked = false;
});

testi.addEventListener('click', function () {
  list.classList.toggle('slide-down');
  toggle.checked = false;
});

contact.addEventListener('click', function () {
  list.classList.toggle('slide-down');
  toggle.checked = false;
});

// child1.forEach((inpo) => {
//   inpo.addEventListener('click', function () {
//     info.classList.toggle('show-details');
//   });
// });

cookies.addEventListener('click', function () {
  infocoo.classList.add('show-details');
});

infocoo.addEventListener('click', function () {
  infocoo.classList.remove('show-details');
});

fudgy.addEventListener('click', function () {
  infofud.classList.add('show-details');
});

infofud.addEventListener('click', function () {
  infofud.classList.remove('show-details');
});

tart.addEventListener('click', function () {
  infotar.classList.add('show-details');
});

infotar.addEventListener('click', function () {
  infotar.classList.remove('show-details');
});

pchoc.addEventListener('click', function () {
  infopc.classList.add('show-details');
});

infopc.addEventListener('click', function () {
  infopc.classList.remove('show-details');
});

bun.addEventListener('click', function () {
  infobun.classList.add('show-details');
});

infobun.addEventListener('click', function () {
  infobun.classList.remove('show-details');
});
