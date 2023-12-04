document.addEventListener('DOMContentLoaded', function() {
    var mobile = document.querySelectorAll('.mobile-menu');

    mobile.forEach(function(element) {
        element.addEventListener('click', function() {
            console.log('clicked');
        
            var svg = document.getElementById('mobile-svg');
            var nav = document.getElementsByClassName('top-nav-container')[0];

            if (svg.src.match('assets/images/icon-menu-close.svg')) {

                nav.classList.toggle('active');
                svg.classList.toggle('active');
                svg.src = 'assets/images/icon-menu.svg';

            } else { 

                nav.classList.toggle('active');
                svg.classList.toggle('active');
                
                svg.src = 'assets/images/icon-menu-close.svg';
            }
            



        });
    });
});