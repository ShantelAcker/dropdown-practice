const menuButton = document.querySelector('.menu-button');
const dropdownMenu = document.querySelector('.dropdown-menu');

menuButton.addEventListener("click", () => {
    // console.log("hi");
    if (dropdownMenu.style.display === 'flex') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'flex';
        menuButton.style.marginTop = '20px';
    }
});