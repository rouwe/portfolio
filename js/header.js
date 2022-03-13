function setOuterHeaderWidth() {
    /* Sets the width of outer header based on inner header
    */
    const outerHeader = document.getElementsByClassName('header-container')[0];
    const innerHeader = document.getElementsByClassName('inner-header-container')[0];
    const innerHeaderWidth = innerHeader.offsetWidth;
    const screenWidth = window.innerWidth;
    if (screenWidth > 767) {
        outerHeader.style.width = `${innerHeaderWidth}px`;
    } else {
        outerHeader.style.width = '100%';
    }
    console.log(innerHeaderWidth)
};
setInterval(setOuterHeaderWidth, 100);