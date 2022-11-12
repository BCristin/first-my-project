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


    // $('form').submit(function (e) {
    //     e.preventDefault();
    //     $.ajax({
    //         type: "POST",
    //         url: "mailer/smart.php",
    //         data: $(this).serialize()
    //     }).done(function () {
    //         $(this).find("input").val("");


    //         $('form').trigger('reset');
    //     });
    //     return false;
    // });

});



"use strict"
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);
    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(form);
        let formData = new FormData(form);

        if (error === 0) {
            form.classList.add('_sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                formPreview.innerHTML = '';
                form.reset();
                form.classList.remove('_sending');
            } else {
                alert('ceva nu a mers bine cu trimiterea formei');
                form.classList.remove('_sending');
            }

        } else {
            alert('ceva nu mers bine');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');
        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);
            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input)
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

})

