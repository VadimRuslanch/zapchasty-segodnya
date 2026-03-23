import { Splide } from '@splidejs/splide';

(() => {
    const sideMenu = document.getElementById('sidemenu');
    const openBtn = document.getElementById('sidemenu-open');
    const closeBtn = document.getElementById('sidemenu-close');
    const sideMenuLinks = sideMenu ? sideMenu.querySelectorAll('.sidemenu__link') : [];

    if (!sideMenu || !openBtn || !closeBtn) {
        return;
    }

    const closeMenu = () => {
        if (sideMenu.open) {
            sideMenu.close();
        }
        openBtn.setAttribute('aria-expanded', 'false');
    };

    openBtn.addEventListener('click', () => {
        sideMenu.showModal();
        openBtn.setAttribute('aria-expanded', 'true');
    });

    closeBtn.addEventListener('click', closeMenu);

    sideMenu.addEventListener('close', () => {
        openBtn.setAttribute('aria-expanded', 'false');
    });

    sideMenu.addEventListener('click', (event) => {
        if (event.target === sideMenu) {
            closeMenu();
        }
    });

    sideMenuLinks.forEach((link) => {
        link.addEventListener('click', closeMenu);
    });
})();

const reviewsSlider = document.querySelector('.reviews-slider');

if (reviewsSlider) {
    new Splide(reviewsSlider, {
        type: 'loop',
        perPage: 2,
        perMove: 1,
        gap: '1rem',
        pagination: true,
        arrows: true,
        autoplay: true,
        interval: 3500,
        pauseOnHover: true,
        pauseOnFocus: true,
        breakpoints: {
            900: {
                perPage: 1,
            },
        },
    }).mount();
}
