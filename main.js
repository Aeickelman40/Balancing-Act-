var closeButton = document.querySelector('.closeButton');
var welcomeDisappear = document.querySelector('.welcome');

closeButton.addEventListener('click', closeWelcome);

function closeWelcome() {
  welcomeDisappear.style.display = "none";
}


var wallet = document.querySelector('.transactions');
var clipboard = document.querySelector('.dashboard');
var main = document.querySelector('.main');

wallet.addEventListener('click', borderToWallet);


function borderToWallet () {
  clipboard.classList.remove('navImageBorder');
  wallet.classList.add('navImageBorder');
  main.classList.add('hide');
}

clipboard.addEventListener('click', walletToClipboard);

function walletToClipboard () {
  clipboard.classList.add('navImageBorder');
  wallet.classList.remove('navImageBorder');
  main.classList.remove('hide'); 
}
