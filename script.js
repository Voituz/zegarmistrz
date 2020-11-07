// main menu
const pages = [...document.querySelectorAll('.page')];
const liList = [...document.querySelectorAll('nav.main-nav ul li')];
const closeBtns = [...document.querySelectorAll('button.close')];

const closePage = () => {
  pages.forEach(page => {
    page.classList.remove('active-page');
    liList.forEach((li => li.classList.remove('active-li')));
  })
}

liList.forEach(function(li) {
  li.addEventListener('click', function() {
    closePage();
    document.getElementById('phonebtn').style.opacity = '0';
    document.querySelector('.main-nav').style.opacity = '0';
    li.classList.add('active-li');
    const liIndex = liList.indexOf(li);
    pages[liIndex].scrollTo(0,0);
    closeBtns[liIndex].style.opacity = '1';
    closeBtns[liIndex].style.animation = '.7s btnmove';
    pages[liIndex].classList.toggle('active-page');
    pages.forEach((page => {
      page.style.transition = '.7s height, .1s padding';
    }))
  })
})

closeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    closeBtns.forEach((btn => {
      document.getElementById('phonebtn').style.opacity = '1';
      document.querySelector('.main-nav').style.opacity = '1';
      btn.style.opacity = '0';
      btn.style.animation = 'none';
      pages.forEach((page => {
        page.style.transition = '.7s height, .7s .3s padding';
      }))
    }))
    closePage();
  })
})
