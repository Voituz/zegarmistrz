// page funcionality elements
const pages = [...document.querySelectorAll('.page')];
const liList = [...document.querySelectorAll('nav.main-nav ul li')];
const liListBurger = [...document.querySelectorAll('nav.burger-nav ul li')];
const burgerMenu = document.querySelector('i.fa-bars');
const divBurger = document.querySelector('div.burger-menu');
const closeBtns = [...document.querySelectorAll('button.close')];
const baner = document.querySelector('header')
// contact-form
const name = document.querySelector('#form-name');
const email = document.querySelector('#form-email');
const phone = document.querySelector('#form-phone');
const message = document.querySelector('#form-message');
const checkbox = document.querySelector('#form-checkbox');
const status = document.querySelector('#form-status');
const send = document.querySelector('div.send-info');


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

// contact-form
document.querySelector('#form-submit').addEventListener('click', function(event) {
  if(checkbox.checked !== true) {
    event.preventDefault();
    status.innerHTML = '<img src="./imgs/outfit/exclamation-mark.png" alt="alert"> Musisz zaakceptować politykę prywatności';
  } else {
    status.innerHTML = '<img src="./imgs/outfit/check.png" alt="alert"> Wysłano wiadomość :)';
    send.style.display = 'flex';
    event.preventDefault();
    setTimeout(function() {
      document.querySelector('.contact form').submit();
      document.querySelector('.contact form').reset();
    }, 2000)
  }
  if(message.value.length <= 10) {
    event.preventDefault();
    status.innerHTML = '<img src="./imgs/outfit/exclamation-mark.png" alt="alert"> Wiadomość za krótka';
  }
  if(phone.value.length !== 9) {
    event.preventDefault();
    status.innerHTML = '<img src="./imgs/outfit/exclamation-mark.png" alt="alert"> Nieprawidłowy numer telefonu';
  }
  if(!email.value.includes('@')) {
    event.preventDefault();
    status.innerHTML = '<img src="./imgs/outfit/exclamation-mark.png" alt="alert"> Nieprawidłowy e-mail';
  }
  if(!email.value.includes('.')) {
    event.preventDefault();
    status.innerHTML = '<img src="./imgs/outfit/exclamation-mark.png" alt="alert"> Nieprawidłowy e-mail';
  }
  if(name.value.length <= 2) {
    event.preventDefault();
    status.innerHTML = '<img src="./imgs/outfit/exclamation-mark.png" alt="alert"> Nieprawidłowe imię';
  }
})
