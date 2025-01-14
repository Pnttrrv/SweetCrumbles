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
// const produkTilt = document.querySelectorAll('#products .product');

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

function handleResize() {
  const windowWidth = window.innerWidth;
  const produkTilt = document.querySelectorAll('.product');
  let i = 0;
  let j = 100;
  if (windowWidth >= 1024) {
    //adjust breakpoint as needed
    produkTilt.forEach((produk) => {
      //i use forEach because i'm using queryselectorAll
      produk.setAttribute('data-tilt', null); //adding data-tilt to Attribute
    });
  } else {
    produkTilt.forEach((produk) => {
      produk.removeAttribute('data-tilt', null); //remove data-tilt from Attribute
      produk.setAttribute('data-aos', 'fade-up');
      produk.setAttribute('data-aos-delay', `${i}`);
      produk.setAttribute('data-aos-once', 'true');
      i = i + j;
    });
  }
}

handleResize(); //initial check on page load

window.addEventListener('resize', handleResize); //eventListener for window resize
