$(function () {
  $('.menu a, .go-top').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $('.slider-blog__inner').slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/arrow-left.svg" alt="left" /></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/arrow-right.svg" alt="right" /></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $('.menu__btn, .menu a').on('click', function () {
    $('.header__top-inner').toggleClass('header__top-inner--active');
  });

  var mixer = mixitup('.portfolio__content');
});
