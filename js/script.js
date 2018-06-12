/*--  Запрет правого клика по картинкам  --*/
var imgs = $('img');
var denieClick = $('.js_denieClick');

$(function () {
  $('#tel, .callback__input, .contacts__tel').inputmask({"mask": "+9 (999) 999-9999"})
});

if (imgs.length > 0 || denieClick) {
  imgs.each(function () {
    $(this)[0].oncontextmenu = function () {
      return false
    }
  });

  if ($(window).width() < 576) {
    denieClick.each(function () {
      $(this)[0].oncontextmenu = function () {
        return false
      }
    });
  }
}

$('.food-slider').slick({
  slidesToShow: 1,
  arrows: false
})

$('.help__popular').slick({
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});

/*--  Слайдер на странице отзывов  --*/
$('.delivery__slider').slick({
  centerMode: true,
  centerPadding: '80px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '120px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1
      }
    }
  ]
});

$(document).on('click', '.js_callback', function () {
  $('.callback').fadeIn('fast');
});

$(document).on('click', '.callback__overlay, .callback__close', function () {
  $('.callback').fadeOut('fast');
});

$('#callback').validate({
  // Specify validation rules
  rules: {
    // The key name on the left side is the name attribute
    // of an input field. Validation rules are defined
    // on the right side
    callback: {
      required: true,
      number: true
    },
  },
  // Specify validation error messages
  messages: {
    callback: "Пожалуйста, введите ваш телефон",
  }
});

//dropdown-menu
$(function () {
  $(document).on('click', '.header__nav-menu>li>a', function (event) {
    var menu = $(this).siblings('.menu');
    if (menu.length > 0) {
      event.preventDefault();
      if (menu.hasClass('menu--is-visible')) {
        menu.removeClass('menu--is-visible')
      } else {
        menu.addClass('menu--is-visible')
      }
    }
  })
});

$('.catalogue__slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});