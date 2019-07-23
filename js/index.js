/*global $, window*/
$(function() {
    // start responsive link
  var menuIcon = $('header .head-right .menu'),
  listMenu = $('header .head-right ul'),
  circle = $('header .head-right .circle');
  menuIcon.on('click', function () {
      if(menuIcon.hasClass('add')) {
        circle.animate({
            width:'200px'
        }, 300);  
        listMenu.animate({
            width:'30%'
        }, 500, function() {
            $(this).siblings('.menu').text('-').addClass('remove').removeClass('add');
        });

      } else {  
        listMenu.animate({
            width:'0%'
        }, 300, function() {
            $(this).siblings('.menu').text('+').addClass('add').removeClass('remove');
        });
        circle.animate({
            width:'0px'
        }, 500); 
      }

  });
//   start effect img
const squart = $('section .sec-tow .img-box .squart'),
img = $('section .sec-tow .img-box .img img');
img.animate({
left:'0%'
}, 200);
    squart.animate({
        width: '90%',
    }, 800, function () {
        $(this).css({
            left:'auto',
            right:'5%'
        });
    });
    squart.animate({
        width: '0%'
    }, 800, function () {
        $('section .sec-tow .img-box .circle2').fadeIn(500);
        $('section .sec-tow .chevron').fadeIn(500);
    });

// start blog section nice move for img
 const myImg1 = $('section.blog .blog1 .blog_img img'),
 myImg2 = $('section.blog .blog2 .blog_img img'),
 myHTow = $('section.blog .blog1 .blog_img h2'),
 myTiTan =$('#titan'),
 win = $(window);
 win.on('scroll', function (e) {
     let scTop = win.scrollTop();
    //  start images
    let x, y;
    if (win.width() >= 514) {
        x = 0.13987;
        y = 0;
    } else {
        x = 0.0714796;
        y = 0.0188203;
    }
     myImg1.css('left', (scTop*x) +(-100) + '%');
     var poLeft = 100 + (-(scTop*(x + (-y))));
     myImg2.css('left', poLeft  + '%');
     console.log(scTop);
     console.log();
    //  start title
     if (scTop >= 200) {
         myHTow.fadeIn(500).css({
             transform: 'translate(0,0)'
         })
     } else {
         myHTow.fadeOut(500).css({
            transform: 'translate(20px,20px)'
        });
     }
     if (scTop >= 300) {
        myTiTan.fadeIn(500);
    } else {
        myTiTan.fadeOut(500);
    }
    if (scTop >= 700) {
        myTiTan.css({
            transform: 'rotate(0deg)',
            top:'150px'
        });
    } else {
        myTiTan.css({
            transform: 'rotate(-20deg)',
            top: 0
        });
    }
    // start 2019 effect 
    let unPo, deuxPo;
    if (win.width() >= 514) {
        unPo = 0.029629629;
        deuxPo=unPo;

    } else {
        unPo = 0.007779074;
        deuxPo = 0.00700116686;

    }
    const un = $('footer .year .partie-un'),
    deux = $('footer .year .partie-deux');
    un.css('left', (scTop*unPo) + '%');
    deux.css('right', (scTop*deuxPo) + '%');

 });

});