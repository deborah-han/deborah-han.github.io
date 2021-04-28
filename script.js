const ham = document.querySelector('.hamburger');
const modal = document.querySelector('#mainModal');
const btn = document.querySelector('.navigation');
const close = document.querySelector('.hamburger-close');

/*
function myFunction(x) {
  x.classList.toggle('change');
}*/

ham.addEventListener("click", function(evt) {
  modal.style.display="block"
  document.body.style.overflowY="hidden"
  document.body.style.height="100vh"
});

close.addEventListener("click", function(evt) {
  modal.style.display="none"
});

