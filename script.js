//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Carousel Item HTML
    /**
     * @param {string} src
     * @param {string} alt
     * @returns {string}
     */
    carouselItem = (src, active = false, alt = 'Image Project 1') =>
        `<div class="carousel-item ${active ? 'active' : ''}">
            <img src="${src}" class="d-block w-100 rounded" alt="${alt}">
        </div>`;
    
    // Carousel Indicator HTML
    /**
     * @param {string} target
     * @param {int} index
     * @returns {string}
     */
    carouselIndicator = (target, index = 0) =>
        `<button type="button" data-bs-target="#${target}" data-bs-slide-to="${index}" aria-label="Slide ${index + 1}" ${index === 0 ? 'class="active" aria-current="true"' : ''} ></button>`;
    
    // Badge HTML
    /**
     * @param {string} text
     * @param {string} color
     * @returns {string}
     */
    badgeItem = (text, color = 'info') =>
        `<span class="badge bg-${color} mx-2">${text}</span>`;

    // Social media links
    const socialMediaButton = document.querySelectorAll('.scm-btn');
    const socialMediaLink = [
        'https://github.com/mesayusriana12',
        'https://gitlab.com/mesayusriana12',
        'https://www.linkedin.com/in/mesayusriana/',
        'https://wa.me/+6282118207806',
        'https://t.me/mesayusriana12git',
        'https://www.instagram.com/mesayusriana12/',
        'mailto:mesayusriana12@gmail.com'
    ];
    
    socialMediaButton.forEach((button, index) => {
        button.addEventListener('click', () => {
            button.setAttribute('href', socialMediaLink[index]);
            setTimeout(() => {
                button.removeAttribute('href');
            }, 1000);
        });
    });

    // Splides
    Splide.defaults = {
        snap: true,
        autoplay: true,
        height     : '10rem',
        perPage    : 4,
        breakpoints: {
            768: {
                perPage: 2,
            },
        },
        rewind     : true,
    }

    const splideFE = new Splide( '#skillFrontend', {}).mount();
    const splideBE = new Splide('#skillBackend', {}).mount();
    const splideTO = new Splide('#skillTools', {}).mount();
    
    // Certificate Modal
    let certificateModal = document.getElementById('certificateModal');
    certificateModal, addEventListener('show.bs.modal', function (event) {
        let related = event.relatedTarget.lastElementChild;
        let modalTitle = document.getElementById('certificateModalTitle');
        let modalPicture = document.getElementById('certificateModalPicture');

        modalTitle.innerHTML = related.getAttribute('alt');
        modalPicture.src = related.getAttribute('src');
    });

    // Porject Modal
    let projectModal = document.getElementById('projectModal');
    projectModal, addEventListener('show.bs.modal', function (event) {
        let htmlBadge = '';
        let htmlCarouselItem = '';
        let htmlCarouselIndicator = '';

        let related = event.relatedTarget;
        let modalTitle = document.getElementById('projectModalTitle');
        let modalPicture = document.getElementById('projectModalPicture');
        let modalCarouselIndicator = document.getElementById('projectModalCarouselIndicator');
        let modalBadge = document.getElementById('projectModalBadge');
        let modalDescription = document.getElementById('projectModalDescription');

        related.getAttribute('data-badge').split('|').forEach((badge) => {
            htmlBadge += badge ? badgeItem(badge) : '';
        });

        related.getAttribute('data-picture').split('|').forEach((src, iterator) => {
            htmlCarouselItem += src ? carouselItem(`./assets/img/project/${src}`, iterator === 0) : '';
            htmlCarouselIndicator += src ? carouselIndicator('projectModalCarousel', iterator) : '';
        });
        
        modalTitle.innerHTML = related.getAttribute('data-title');
        modalPicture.innerHTML = htmlCarouselItem;
        modalCarouselIndicator.innerHTML = htmlCarouselIndicator;
        modalBadge.innerHTML = htmlBadge;
        modalDescription.innerHTML = related.getAttribute('data-description');
    });

    let leaf = document.getElementById('leaf');
    let hill1 = document.getElementById('hill1');
    let hill4 = document.getElementById('hill4');
    let hill5 = document.getElementById('hill5');
    let sun = document.getElementById('sun');
    let plant = document.getElementById('plant')

    window.addEventListener('scroll',() =>{
        let value = window.scrollY;

        leaf.style.top = value * -0.7 + 'px'
        leaf.style.left = value * 0.7 + 'px'
        sun.style.top = value *  0.8+ 'px'
        sun.style.left = value *  -0.2+ 'px'
        hill5.style.left = value *  0.5+ 'px'
        // hill5.style.top = value *  0.1+ 'px'
        hill4.style.left = value *  -0.5+ 'px'
        // hill1.style.top = value * 0.2+ 'px'
    });

});
