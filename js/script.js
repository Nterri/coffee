const iconMenu = document.querySelector('.sidebar__burger');
const menuBody = document.querySelector('.sidebar');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    });
};

$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 2,
        waitForAnimate: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            }
        ]
    });
    $('.slider2').slick({
        slidesToShow: 3,
        waitForAnimate: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            }
        ]
    });
});

const buttonSidebar = document.querySelectorAll('.gift__sidebar-btn');
const itemSidebar = document.querySelectorAll('.gift__item');
if (buttonSidebar.length > 0) {
    buttonSidebar.forEach((button, index) => {
        button.addEventListener('click', () => {
            buttonSidebar.forEach(button => { button.classList.remove('active') });
            button.classList.add('active');
            itemSidebar.forEach(item => { item.classList.remove('active') });
            itemSidebar[index].classList.add('active');
        });
    });
}

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick)
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        menuLinks.forEach(menuLink => { menuLink.classList.remove('active') });
        menuLink.classList.add('active');
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
            if (iconMenu.classList.contains('active')) {
                document.body.classList.remove('lock');
                iconMenu.classList.remove('active');
                menuBody.classList.remove('active');
            }
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
        }
    }
};