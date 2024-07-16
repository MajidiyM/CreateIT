$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
        navigationPosition: 'bottom',
        anchors: ['home', 'services', 'portfolio', 'contacts'],
        menu: '#menu',
        slidesNavigation: true,
    });
});