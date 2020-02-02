var closeButton = document.querySelector('.closeButton');
var welcomeDisappear = document.querySelector('.welcome');
var wallet = document.querySelector('.transactions');
var clipboard = document.querySelector('.dashboard');
var main = document.querySelector('.main');
var transactionsPage = document.querySelector('.transactionsPage');

closeButton.addEventListener('click', closeWelcome);
wallet.addEventListener('click', borderToWallet);
clipboard.addEventListener('click', walletToClipboard);


function closeWelcome() {
  welcomeDisappear.style.display = "none";
}

function borderToWallet() {
  clipboard.classList.remove('navImageBorder');
  wallet.classList.add('navImageBorder');
  main.classList.add('hide');
  transactionsPage.classList.remove('hide');
}

function walletToClipboard() {
  clipboard.classList.add('navImageBorder');
  wallet.classList.remove('navImageBorder');
  main.classList.remove('hide');
  transactionsPage.classList.add('hide');
}
