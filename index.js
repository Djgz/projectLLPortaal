let dropdown1 = document.querySelector('.userOptions');
let userMenu = document.querySelector('.userMenu');

dropdown1.onclick = function() {
    userMenu.classList.toggle('active');
    dropdown1.classList.toggle('active');
}

let burgerMenu = document.getElementById('burgerMenu');
let mainMenu = document.querySelector('.mainMenu');

burgerMenu.onclick = function() {
    mainMenu.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function() {
    const dropMenuWraps = document.querySelectorAll('.dropmenuwrap');
  
    dropMenuWraps.forEach(function(wrapper) {
      const wdrop = wrapper.querySelector('.Wdrop');
      const dropdown = wrapper.querySelector('.menuLinkDrop');
      let pointerTimeout; 
  
      wdrop.addEventListener('click', function(e) {
        e.preventDefault(); 
  
        if (wrapper.classList.contains('active')) {
          wrapper.classList.remove('active');
          dropdown.classList.remove('enabled');
          clearTimeout(pointerTimeout);
        } else {
          dropMenuWraps.forEach(function(otherWrapper) {
            if (otherWrapper !== wrapper && otherWrapper.classList.contains('active')) {
              otherWrapper.classList.remove('active');
              const otherDropdown = otherWrapper.querySelector('.menuLinkDrop');
              if (otherDropdown) {
                otherDropdown.classList.remove('enabled');
              }
            }
          });
          wrapper.classList.add('active');
          dropdown.classList.remove('enabled');
          pointerTimeout = setTimeout(function() {
            dropdown.classList.add('enabled');
          }, 300);
        }
      });
    });
  });