// Show dropdown when clicked
$('#header-btn').on('click', function (e) {
    $('#MENU_ID_HERE').toggleClass('active');
    $('.nav-btn').toggleClass('active');
});

// Hide menu after clicking menu item
$('.dropdown-menu li').on('click', function (e) {
    $('#MENU_ID_HERE').removeClass('active');
    $('.nav-btn').removeClass('active');
});