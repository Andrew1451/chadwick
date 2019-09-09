const expandButton  = document.getElementById('expand-button');
const banner = document.getElementsByClassName('banner');

expandButton.onclick = function() {
    const mobileNav = document.querySelectorAll('.mobile-nav');
    for(var i = 0; i < mobileNav.length; i++) {
        mobileNav[i].classList.toggle('open');
    }
};
// window.onload = function() {
//     banner[0].style.display='block';
// }