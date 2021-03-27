/*jslint plusplus: true, evil: true*/
/*global console, alert, prompt*/

/*Start FAQ*/
function slideInfo1() {
    document.getElementById('faq1').classList.toggle('beforeInfo');
    document.getElementById('faq1').classList.toggle('afterInfo');

    document.getElementById('faq1.1').classList.toggle('beforeSlideing');
    document.getElementById('faq1.1').classList.toggle('afterSlideing');
}

function slideInfo2() {
    document.getElementById('faq2').classList.toggle('beforeInfo');
    document.getElementById('faq2').classList.toggle('afterInfo');

    document.getElementById('faq2.2').classList.toggle('beforeSlideing');
    document.getElementById('faq2.2').classList.toggle('afterSlideing');
}

function slideInfo3() {
    document.getElementById('faq3').classList.toggle('beforeInfo');
    document.getElementById('faq3').classList.toggle('afterInfo');

    document.getElementById('faq3.3').classList.toggle('beforeSlideing');
    document.getElementById('faq3.3').classList.toggle('afterSlideing');
}
/*End FAQ*/

/***************************************************************/ 
$(function () {

    (function autoSlider() {
        $('.sliderQuote .active').each(function () {
    
            if (!$(this).is(':last-child')) {
    
                $(this).delay(3000).fadeOut(1000, function() {
    
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
    
                });
    
            } else {
                $(this).delay(3000).fadeOut(1000, function() {
                    
                    $(this).removeClass('active');
                    $('.sliderQuote div').eq(0).addClass('active').fadeIn();
                    autoSlider();
    
                });
            }
        });
    }());

    
});

/***************************************************************/
window.addEventListener("scroll",function() {

    'use strict';

    /*Start INFO*/
    if (window.pageYOffset >= 290) {
        setTimeout(function () {
            document.getElementById('info1').classList.add('animate__animated');
            document.getElementById('info1').classList.add('animate__fadeInLeft');
            
            document.getElementById('info2').classList.add('animate__animated');
            document.getElementById('info2').classList.add('animate__fadeInLeft');
            
            document.getElementById('info3').classList.add('animate__animated');
            document.getElementById('info3').classList.add('animate__fadeInLeft');
        }, 0);
        
        setTimeout(function () {
            document.getElementById('info4').classList.add('animate__animated');
            document.getElementById('info4').classList.add('animate__fadeInLeft');
            
            document.getElementById('info5').classList.add('animate__animated');
            document.getElementById('info5').classList.add('animate__fadeInLeft');
            
            document.getElementById('info6').classList.add('animate__animated');
            document.getElementById('info6').classList.add('animate__fadeInLeft');
        }, 150);
    }
    /*End INFO*/
    
    /*Start Test*/
    if (window.pageYOffset >= 900) {
        setTimeout(function () {
            document.getElementById('test1.1').classList.add('animate__animated');
            document.getElementById('test1.1').classList.add('animate__fadeInUp');
            
            document.getElementById('test1.2').classList.add('animate__animated');
            document.getElementById('test1.2').classList.add('animate__fadeInUp');
        }, 0);
    
        setTimeout(function () {
            document.getElementById('test2.1').classList.add('animate__animated');
            document.getElementById('test2.1').classList.add('animate__fadeInUp');
            
            document.getElementById('test2.2').classList.add('animate__animated');
            document.getElementById('test2.2').classList.add('animate__fadeInUp');
        }, 300);
        
        setTimeout(function () {
            document.getElementById('test3.1').classList.add('animate__animated');
            document.getElementById('test3.1').classList.add('animate__fadeInUp');
            
            document.getElementById('test3.2').classList.add('animate__animated');
            document.getElementById('test3.2').classList.add('animate__fadeInUp');
        }, 600);
        
        setTimeout(function () {
            document.getElementById('test4.1').classList.add('animate__animated');
            document.getElementById('test4.1').classList.add('animate__fadeInUp');
            
            document.getElementById('test4.2').classList.add('animate__animated');
            document.getElementById('test4.2').classList.add('animate__fadeInUp');
        }, 900);
        
        setTimeout(function () {
            document.getElementById('test5.1').classList.add('animate__animated');
            document.getElementById('test5.1').classList.add('animate__fadeInUp');
            
            document.getElementById('test5.2').classList.add('animate__animated');
            document.getElementById('test5.2').classList.add('animate__fadeInUp');
        }, 1200);
    
    }
    
    if (window.pageYOffset >= 1700) {
        setTimeout(function () {
            document.getElementById('serv1').classList.add('animate__animated');
            document.getElementById('serv1').classList.add('animate__fadeInDown');
            
            document.getElementById('serv2').classList.add('animate__animated');
            document.getElementById('serv2').classList.add('animate__fadeInUp');
        }, 0);
        
        setTimeout(function () {
            document.getElementById('serv3').classList.add('animate__animated');
            document.getElementById('serv3').classList.add('animate__fadeInRight');
            
            document.getElementById('serv4').classList.add('animate__animated');
            document.getElementById('serv4').classList.add('animate__fadeInLeft');
        }, 200);
    }

    if (window.pageYOffset >= 4100) {
        setTimeout(function() {
            document.getElementById('coun1').classList.add('counterN1');
            document.getElementById('coun2').classList.add('counterN2');
            document.getElementById('coun3').classList.add('counterN3');
            document.getElementById('coun4').classList.add('counterN4');
        }, 0)
    }
    
    if (window.pageYOffset >= 5168) {
        setTimeout(function() {
            document.getElementById('col11').classList.add('colorful');
            document.getElementById('col12').classList.add('colorful');
        })
    } else {
        document.getElementById('col11').classList.remove('colorful');
        document.getElementById('col12').classList.remove('colorful');
    }

    if (window.pageYOffset >= 5272) {
        setTimeout(function() {
            document.getElementById('col21').classList.add('colorful');
            document.getElementById('col22').classList.add('colorful');
            document.getElementById('col23').classList.add('colorful');
            document.getElementById('col24').classList.add('colorful');
        })
    } else {
            document.getElementById('col21').classList.remove('colorful');
            document.getElementById('col22').classList.remove('colorful');
            document.getElementById('col23').classList.remove('colorful');
            document.getElementById('col24').classList.remove('colorful');
    }
});

/*End Test*/
