// menu si butonul din meniu
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-list'),
        menuItem = document.querySelectorAll('.nav-item'),
        hamburger = document.querySelector('.hamburger');
    //   body = document.querySelector('.body');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        //   body.classList.toggle('no__scroll');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
            //   body.classList.toggle('no__scroll');
        })
    })
});

// swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // loop: true,
    slidesPerView: 3,
    // slidesPerGroup: 1,
    grabCursor: true,
    slideToClickedSlide: true,
    rewind: true,
    // speed: 4000,
    spaceBetween: 20,

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    }, autoplay: {
        delay: 5000,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,

    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        hide: true,
        // dragSize: 200,
    },
    preloadImages: false,
    lazy: {
        loadOnTransitionStart: false,
        loadPrevNext: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                enabled: false,
            }
        },
        // when window width is >= 480px
        440: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        770: {
            slidesPerView: 3,
            spaceBetween: 40,
            speed: 4000,
        }
    }
});


$(document).ready(function () {
    $(function () {
        //Modal
        $('[data-modal=contact-me]').on('click', function () {
            $('.overlay, #contact-me').fadeIn('slow');
        });
        $('.modal__close').on('click', function () {
            $('.overlay, #contact-me').fadeOut('slow');
        });
    });


    $('form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");


            $('form').trigger('reset');
        });
        return false;
    });

})(jQuery);

