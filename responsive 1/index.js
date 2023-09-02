var navbar = document.querySelector('.header .navbar');
console.log(document.querySelector('#menu-btn'));
document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active')
}

window.onscroll = () => {
  navbar.classList.remove('active');
}