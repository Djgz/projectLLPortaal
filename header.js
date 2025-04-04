// Toggle de user menu
let dropdown1 = document.querySelector('.userOptions');
let userMenu = document.querySelector('.userMenu');

if (dropdown1 && userMenu) {
  dropdown1.onclick = function() {
    userMenu.classList.toggle('active');
    dropdown1.classList.toggle('active');
  }
}

// Toggle de burger-menu
let burgerMenu = document.getElementById('burgerMenu');
let mainMenu = document.querySelector('.mainMenu');

if (burgerMenu && mainMenu) {
  burgerMenu.onclick = function() {
    mainMenu.classList.toggle('open');
  }
}

document.addEventListener('DOMContentLoaded', function() {

  // Functie om alle relevante states naar default te resetten
  function resetStates() {
    // Reset burger-menu state
    const burgerMenus = document.querySelectorAll('.burger-menu');
    burgerMenus.forEach(function(burger) {
      burger.classList.remove('active');
    });
    if (mainMenu) {
      mainMenu.classList.remove('open');
    }
    
    // Reset dropdown state
    const dropMenuWraps = document.querySelectorAll('.dropmenuwrap');
    dropMenuWraps.forEach(function(wrapper) {
      wrapper.classList.remove('active');
      const dropdown = wrapper.querySelector('.menuLinkDrop');
      if (dropdown) {
        dropdown.classList.remove('enabled');
      }
    });
    
    // Reset menulink state
    const menuLinks = document.querySelectorAll('.menuLink');
    menuLinks.forEach(function(link) {
      link.classList.remove('active');
    });
  }
  
  // Roep resetStates direct aan zodat alle elementen de default-state hebben.
  resetStates();
  
  // Drempel voor mobiele functionaliteit (in pixels)
  const threshold = 865;
  const dropMenuWraps = document.querySelectorAll('.dropmenuwrap');
  
  dropMenuWraps.forEach(function(wrapper) {
    const wdrop = wrapper.querySelector('.Wdrop');
    if (!wdrop) return;
    const dropdown = wrapper.querySelector('.menuLinkDrop');
    let pointerTimeout;
    
    wdrop.addEventListener('click', function(e) {
      // Alleen uitvoeren als het scherm kleiner is dan de drempel
      if (window.innerWidth > threshold) return;
      
      e.preventDefault();
      
      if (wrapper.classList.contains('active')) {
        // Als de dropdown al actief is: sluit hem
        wrapper.classList.remove('active');
        if (dropdown) dropdown.classList.remove('enabled');
        clearTimeout(pointerTimeout);
      } else {
        // Eerst alle andere actieve dropdowns sluiten
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
        if (dropdown) dropdown.classList.remove('enabled');
        // Na 300ms pointer-events inschakelen
        pointerTimeout = setTimeout(function() {
          if (dropdown) {
            dropdown.classList.add('enabled');
          }
        }, 300);
      }
    });
  });
  
  // Reset alle states als het scherm groter wordt dan de drempel
  window.addEventListener('resize', function() {
    if (window.innerWidth > threshold) {
      resetStates();
    }
  });
});
