// make everything under the body tag of the page fade-in
document.body.className = 'fade';

//now you want to remove the fade-in transition
document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(function() {
        document.body.className = '';
    }, 250);
})