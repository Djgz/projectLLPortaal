let dropdown1 = document.querySelector('.userOptions');
let userMenu = document.querySelector('.userMenu');

dropdown1.onclick = function() {
    userMenu.classList.toggle('active');
    dropdown1.classList.toggle('active');
}

