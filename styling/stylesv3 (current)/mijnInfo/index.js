let dropdown = document.querySelector('.userOptions');
let userMenu = document.querySelector('.userMenu');
dropdown.onclick = function() {
    userMenu.classList.toggle('active');
}