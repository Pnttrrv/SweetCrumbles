const toggle = document.querySelector('.menu-toggle input');
const list = document.querySelector('.menu-list');
const home = document.querySelector('.home');
const prods = document.querySelector('.prods');
const testi = document.querySelector('.testi');
const contact = document.querySelector('.kontak');

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
