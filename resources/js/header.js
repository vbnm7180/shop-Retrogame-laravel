//Кнопки перехода на разделы главной страницы из дочерних страниц
$('.nav__sega').on('click', function(e) {
    if (window.location.pathname != '/') {
        e.preventDefault();
        window.location.pathname = '/#sega';
    }
});
$('.nav__nintendo').on('click', function() {
    if (window.location.pathname != '/') {
        e.preventDefault();
        window.location.pathname = '/#nintendo';
    }
});
$('.nav__games').on('click', function() {
    if (window.location.pathname != '/') {
        e.preventDefault();
        window.location.pathname = '/#games';
    }
});
$('.nav__about').on('click', function() {
    if (window.location.pathname != '/') {
        e.preventDefault();
        window.location.pathname = '/#about';
    }
});