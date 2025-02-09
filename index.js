let dropdown1 = document.querySelector('.userOptions');
let dropdown2 = document.querySelector('.menuLink');
let userMenu = document.querySelector('.userMenu');
let menuLinkDrop = document.querySelector('.menuLinkDrop');
let imgRotate = document.querySelector('.userContent')

dropdown1.onclick = function() {
    userMenu.classList.toggle('active');
    dropdown1.classList.toggle('active');
}

dropdown2.onmouseover = function() {
    menuLinkDrop.classList.toggle('active');
}

dropdown2.onmouseout = function() {
    menuLinkDrop.classList.remove('active');
}
