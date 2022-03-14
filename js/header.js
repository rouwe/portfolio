function setOuterHeaderWidth() {
    /* Sets the width of outer header based on inner header
    */
    const outerHeader = document.getElementsByClassName('header-container')[0];
    const innerHeader = document.getElementsByClassName('inner-header-container')[0];
    const innerHeaderWidth = innerHeader.offsetWidth;
    const headerScreenWidth = window.innerWidth;
    if (headerScreenWidth > 767) {
        outerHeader.style.width = `${innerHeaderWidth}px`;
    } else {
        outerHeader.style.width = '100%';
    }
};
setInterval(setOuterHeaderWidth, 100);
const closeMenuButton = document.getElementsByClassName('header-close-menu')[0];
const openMenuButton = document.getElementsByClassName('header-open-menu')[0];
const outerHeader = document.getElementsByClassName('header-container')[0];

setInterval(modifyMenuEvent, 1000);
function modifyMenuEvent() {
    const screenWidth = window.outerWidth;
    if (screenWidth > 767) {
        // Menu Event for tablet and up
        openMenuButton.removeEventListener('click', mobileOpenMenu);
        closeMenuButton.removeEventListener('click', mobileCloseMenu);
        openMenuButton.addEventListener('click', desktopOpenMenu);
        closeMenuButton.addEventListener('click', desktopCloseMenu);
    } else if (screenWidth < 768) {
        // Menu Event for mobile
        openMenuButton.removeEventListener('click', desktopOpenMenu);
        closeMenuButton.removeEventListener('click', desktopCloseMenu);
        openMenuButton.addEventListener('click', mobileOpenMenu);
        closeMenuButton.addEventListener('click', mobileCloseMenu); 
    }
}
const innerHeader = document.getElementsByClassName('inner-header-container')[0];
const navMenuBox = document.getElementsByClassName('nav-menu-box')[0];
const menuBox = document.getElementsByClassName('menu-box')[0];
const navName = document.getElementsByClassName('nav-name')[0];
const navCraft = document.getElementsByClassName('nav-craft')[0];
const navDataBox = document.getElementsByClassName('nav-data-box')[0];
const navItemBox = document.getElementsByClassName('nav-item-box');
const navQuote = document.getElementsByClassName('nav-quote')[0];
const navDestinations = document.getElementsByClassName('nav-destination');
function desktopOpenMenu() {
    // Opens the navigation menu for tablet devices and up
    closeMenuButton.style.display = 'flex';
    openMenuButton.style.display = 'none';
    navName.style.display = 'block';
    navCraft.style.display = 'block';
    navQuote.style.display = 'block';
    for (const navDestination of navDestinations) {
        navDestination.style.display = 'block';
    }
    navDataBox.style.display = 'flex';
    navDataBox.style.flexDirection = 'row';
    navDataBox.style.rowGap = '0px';
    menuBox.style.alignItems = 'flex-start';
    for (const navItem of navItemBox) {
        navItem.style.justifyContent = 'flex-start';
    }
    
}
function desktopCloseMenu() {
    // Closes the navigation menu for tablet devices and up
    closeMenuButton.style.display = 'none';
    openMenuButton.style.display = 'flex';
    navName.style.display = 'none';
    navCraft.style.display = 'none';
    navQuote.style.display = 'none';
    for (const navDestination of navDestinations) {
        navDestination.style.display = 'none';
    }
    navDataBox.style.display = 'flex';
    navDataBox.style.flexDirection = 'column';
    navDataBox.style.rowGap = '0.8rem';
    menuBox.style.alignItems = 'center';
    for (const navItem of navItemBox) {
        navItem.style.justifyContent = 'center';
    }
}
function mobileOpenMenu() {
    // Open mobile menu
    openMenuButton.style.display = 'none';
    closeMenuButton.style.display = 'flex';
    innerHeader.style.maxHeight = 'unset';
    navName.style.display = 'block';
    navCraft.style.display = 'block';
    for (const navDestination of navDestinations) {
        navDestination.style.display = 'block';
    }
    navDataBox.style.display = 'none';
    navQuote.style.display = 'none';
    navMenuBox.style.display = 'flex';
}
function mobileCloseMenu() {
    // Close mobile menu
    const headerMaxHeight = menuBox.offsetHeight;
    openMenuButton.style.display = 'flex';
    closeMenuButton.style.display = 'none';
    innerHeader.style.maxHeight = `${headerMaxHeight}px`;
    for (const navDestination of navDestinations) {
        navDestination.style.display = 'none';
    }
    navDataBox.style.display = 'none';
    navQuote.style.display = 'none';
    navMenuBox.style.display = 'flex';
}
// Reset menu states
if (window.outerWidth < 768) {
    mobileOpenMenu();
    mobileCloseMenu();
} else {
    desktopCloseMenu();
    desktopOpenMenu();
}
// Sync menu state based on screen viewport when resizing
window.onresize = () => {
    const closeDisplay = closeMenuButton.style.display;
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        if (closeDisplay == 'flex') {
            // Menu is Open
            mobileCloseMenu();
            mobileOpenMenu();
        } else {
            mobileOpenMenu();
            mobileCloseMenu();
        }
    } else {
        if (closeDisplay == 'none') {
            // Menu is closed
            desktopOpenMenu();
            desktopCloseMenu();
        } else {
            desktopCloseMenu();
            desktopOpenMenu();
        }
    }
}