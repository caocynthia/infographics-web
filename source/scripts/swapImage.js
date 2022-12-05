/**
 * swap image
 * @param {object} elem the image element
 * elem must have the attribute 'data-src-alt'
 */
 function swapImage(elem){
    const alternateImage = elem.getAttribute('data-src-alt');
    if (!elem.getAttribute('src').match(alternateImage)) {
        elem.setAttribute("data-src-orig",elem.getAttribute('src'));
        elem.setAttribute('src',alternateImage);
    } else {
        elem.setAttribute('src',elem.getAttribute('data-src-orig'));
    }
}

/**
 * swap target
 * @param {event} e the click event
 * @param {string} id of the target image element
 * @param {string} alternateImage src
 * elem must have the attribute 'data-src-alt'
 */
function swapTarget(e,id,alternateImage){
    e.preventDefault();
    const elem = document.getElementById(id);
    elem.setAttribute('src',alternateImage);
}