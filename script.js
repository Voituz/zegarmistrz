
const pages = [...document.querySelectorAll('.page')];
const liList = [...document.querySelectorAll('nav.main-nav ul li')];
const liListBurger = [...document.querySelectorAll('nav.burger-nav ul li')];
const burgerMenu = document.querySelector('i.fa-bars');
const divBurger = document.querySelector('div.burger-menu');
const closeBtns = [...document.querySelectorAll('button.close')];
const baner = document.querySelector('header')

const closePage = () => {
  pages.forEach(page => {
    page.style.transition = '.7s height, .5s .2s padding';
    page.classList.remove('active-page');
    liList.forEach((li => li.classList.remove('active-li')));
  })
}

const showBanerElements = function() {
  closeBtns.forEach((btn => {
    document.getElementById('phonebtn').style.opacity = '1';
    document.querySelector('.main-nav').style.opacity = '1';
    document.querySelector('footer').style.opacity = '1';
    divBurger.style.right = '-100vw';
    btn.style.opacity = '0';
    btn.style.animation = 'none';
  }))
}

const showMenuPage = function (li, liIndex) {
    document.getElementById('phonebtn').style.opacity = '0';
    document.querySelector('.main-nav').style.opacity = '0';
    document.querySelector('footer').style.opacity = '0';
    divBurger.style.right = '0';
    li.classList.add('active-li');
    pages[liIndex].scrollTo(0,0);
    closeBtns[liIndex].style.opacity = '1';
    closeBtns[liIndex].style.animation = '.7s btnmove';
    pages[liIndex].classList.toggle('active-page');
    pages.forEach((page => {
      page.style.transition = '.7s height, .1s padding';
    }));
}

// main menu
liList.forEach(function(li) {
  li.addEventListener('click', function() {
    closePage();
    const liIndex = liList.indexOf(li);
    liListBurger.forEach(li => li.classList.remove('active-li'));
    if(liIndex === 0) {
      liListBurger[0].classList.add('active-li');
    } else if(liIndex === 1) {
      liListBurger[1].classList.add('active-li');
    } else if(liIndex === 2) {
      liListBurger[2].classList.add('active-li');
    } else if(liIndex === 3) {
      liListBurger[3].classList.add('active-li');
    } else if(liIndex === 4) {
      liListBurger[4].classList.add('active-li');
    };
    showMenuPage(li, liIndex);
  })
})

// burger menu
burgerMenu.addEventListener('click', () => {
  divBurger.classList.toggle('burger-menu-active');
})

liListBurger.forEach(function(li) {
  li.addEventListener('click', function() {
    liListBurger.forEach((li => {
      li.classList.remove('active-li');
      divBurger.classList.remove('burger-menu-active');
    }));
    closePage();
    const liIndex = liListBurger.indexOf(li);
    showMenuPage(li, liIndex);
    closeBtns[liIndex].style.animation = 'none';
  })
})

// closing pages
closeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    showBanerElements();
    closePage();
  });
})

baner.addEventListener('click', () => {
  divBurger.classList.remove('burger-menu-active');
  showBanerElements();
  closePage();
})

// form
document.querySelector('#form-submit').addEventListener('click', function(event) {

  const name = [...document.querySelector('#form-name').value];
  const email = [...document.querySelector('#form-email').value];
  const phone = [...document.querySelector('#form-phone').value];
  const message = document.querySelector('#form-message').value;
  const checkbox = document.querySelector('#form-checkbox');
  const status = document.querySelector('#form-status');

  status.textContent = '';
  if(checkbox.checked !== true) {
    event.preventDefault();
    status.innerHTML = '<img src="./imgs/outfit/exclamation-mark.png" alt="alert"> Musisz zaakceptować politykę prywatności';
  }
  if(message.length <= 10) {
    event.preventDefault();
    status.innerHTML = '<img src="./imgs/outfit/exclamation-mark.png" alt="alert"> Wiadomość za krótka';
  }
  if(phone.length !== 9) {
    event.preventDefault();
    status.innerHTML = '<img src="./imgs/outfit/exclamation-mark.png" alt="alert"> Nieprawidłowy numer telefonu';
  }
  if(!email.includes('@')) {
    event.preventDefault();
    status.innerHTML = '<img src="./imgs/outfit/exclamation-mark.png" alt="alert"> Nieprawidłowy e-mail';
  }
  if(!email.includes('.')) {
    event.preventDefault();
    status.innerHTML = '<img src="./imgs/outfit/exclamation-mark.png" alt="alert"> Nieprawidłowy e-mail';
  }
  if(name.length <= 2) {
    event.preventDefault();
    status.innerHTML = '<img src="./imgs/outfit/exclamation-mark.png" alt="alert"> Nieprawidłowe imię';
  }
  console.log(email);
})