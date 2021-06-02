$(function () {
    $('.menu__burger').click((event) => {
        $('.menu__burger').toggleClass('burger__active'),
            $('.menu__list').toggleClass('menu__active'),
            $('.header__box-map').toggleClass('header__map-active')
    });

    // slaider
    $('.main__slaider-conteiner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-btn slick-prev"><img src="images/arrow-left.png" alt="prev"></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="images/arrow-right.png" alt="next"></button>',
                                responsive: [
                        {
                            breakpoint: 400,
                            settings: {                            
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            }
                        }
                        ]
    
    });
    
    $('.header__map-link').magnificPopup({
        closeBtnInside: false
    });
    $('.image-popup').magnificPopup({
        type: 'image',
        closeBtnInside: false
    });
});