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


// Dropdown toggle met delay
document.querySelectorAll('.dropmenuwrap').forEach(menu => {
    let dropdown = menu.querySelector('.menuLinkDrop');
    let toggleButton = menu.querySelector('.Wdrop');
    
    if (dropdown && toggleButton) {
        toggleButton.addEventListener('click', (e) => {
            e.preventDefault(); // Voorkom linkgedrag
            e.stopPropagation(); // Voorkom doorklikken 

            setTimeout(() => {
                // Sluit alle andere open dropdowns
                document.querySelectorAll('.menuLinkDrop.visible').forEach(openDropdown => {
                    if (openDropdown !== dropdown) {
                        openDropdown.classList.remove('visible');
                    }
                });
                
                dropdown.classList.toggle('visible');

                // Als de dropdown  zichtbaar is, schakel pointer events tijdelijk uit
                if (dropdown.classList.contains('visible')) {
                    dropdown.style.pointerEvents = 'none';
                    setTimeout(() => {
                        dropdown.style.pointerEvents = '';
                    }, 300); // delay  
                }
            }, 300); // Delay voor toggling
        });
    }
});

// Sluit dropdowns als er buiten wordt geklikt
document.addEventListener('click', (e) => {
    document.querySelectorAll('.menuLinkDrop.visible').forEach(dropdown => {
        if (!dropdown.parentElement.contains(e.target)) {
            dropdown.classList.remove('visible');
        }
    });
});

// Voeg een delay toe aan de links binnen de dropdowns voordat de actie wordt uitgevoerd
document.querySelectorAll('.menuLinkDrop a').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetUrl = this.getAttribute('href');
        if (targetUrl) {
            e.preventDefault(); // Voorkom directe navigatie
            
            // Voeg een delay toe voordat naar de URL wordt genavigeerd
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 300); // Pas de vertraging aan indien gewenst
        }
    });
});

