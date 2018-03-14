// var message="Правый клик запрещен!";
// function clickIE4(){
//       if (event.button==2){
//             return false;
//       }
// }
// function clickNS4(e){
//       if (document.layers||document.getElementById&&!document.all){
//             if (e.which==2||e.which==3){
//                   return false;
//             }
//       }
// }
// if (document.layers){
//       document.captureEvents(Event.MOUSEDOWN);
//       document.onmousedown=clickNS4;
// }
// else if (document.all&&!document.getElementById){
//       document.onmousedown=clickIE4;
// }
// document.oncontextmenu=new Function("return false")

/*--  Запрет правого клика по картинкам  --*/
var imgs = $('img');

if (imgs.length > 0) {
    imgs.each(function () {
        $(this)[0].oncontextmenu = function () {
            return false
        }
    })
}

/*--  Слайдер на странице отзывов  --*/
$('.delivery__slider').slick({
    centerMode: true,
    centerPadding: '110px',
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