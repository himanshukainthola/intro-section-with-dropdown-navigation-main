const navIcons = document.querySelector('.navbar__icons');
const navMenu = document.querySelector('#menu');
const body = document.querySelector('body');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
navIcons.addEventListener('click', () => {
    const visibilty = navMenu.getAttribute('data-visible');

    if (visibilty === "false") {
        navMenu.setAttribute('data-visible', 'true');
        menuBtn.classList.toggle("hide");
        closeBtn.classList.toggle("hide");
        body.classList.add('show');
    } else {
        navMenu.setAttribute('data-visible', 'false');
        menuBtn.classList.toggle("hide");
        closeBtn.classList.toggle("hide");
        body.classList.remove('show');
    }
});


//! dropdown funtionality //

document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle("active")
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })
})


