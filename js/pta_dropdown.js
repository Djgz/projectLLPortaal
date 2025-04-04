function toggleDropdown(id) {
    let dropdown = document.getElementById(id);
    let vak = document.querySelector(`[onclick="toggleDropdown('${id}')"] span`);

    if (dropdown.style.maxHeight && dropdown.style.maxHeight !== "0rem") {
        dropdown.style.maxHeight = "0rem";
        dropdown.style.padding = "0 1rem";
        vak.innerHTML = "+";
        vak.style.padding = '0.25rem 0.75rem'
    } else {
        dropdown.style.maxHeight = dropdown.scrollHeight / 16 + "rem";
        dropdown.style.padding = "1rem 1rem";
        vak.innerHTML = "-";
        vak.style.padding = '0.25rem 0.87rem'
    }
}