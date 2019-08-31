const expandButton  = document.getElementById('expand-button');

expandButton.onclick = function() {
    const mobileNav = document.querySelectorAll('.mobile-nav');
    for(var i = 0; i < mobileNav.length; i++) {
        mobileNav[i].classList.toggle('open');
    }
};