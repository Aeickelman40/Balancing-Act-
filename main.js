var closeButton = document.querySelector('.closeButton');
var welcomeDisappear = document.querySelector('.welcome');

closeButton.addEventListener('click', closeWelcome);

function closeWelcome() {
  welcomeDisappear.style.display = "none";
}
