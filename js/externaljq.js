
//tywrite
var Txttype = function(el, torotate,period) {
    this.torotate = torotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period,10) || 2000;
    this.txt = '';
    this.tick();
    this.isdeleting=false;
   
};

Txttype.prototype.tick=function() {
    var i = this.loopNum % this.torotate.length;
    var fullTxt=this.torotate[i];
    
    if(this.isdeleting) {
        
        this.txt = fullTxt.substring(0,this.txt.length-1);
        
    }else{
        this.txt = fullTxt.substring(0,this.txt.length+1);
    }
    
    this.el.innerHTML= '<span class="wrap">'+this.txt+'</span>';
    
    var that= this; 
    var delta = 200-Math.random()*100;
    
    if(this.isdeleting){ delta /= 2; }
    
    if(!this.isdeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isdeleting = true;
    } else if (this.isdeleting && this.txt === '') {
        this.isdeleting = false;
        this.loopNum++;
        delta=500;
    }
    
    setTimeOut(function(){
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length;i++) {
        var torotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if(torotate) {
            new Txttype(elements[i], JSON.parse(torotate), period);
        }
    }
    
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

//counter
(function($){
    "use strict";
    function count($this) {
        var current = parseInt($this.html(),10);
        current = current+1;
        $this.html(++current);
            if(current > $this.data('count')){
                $this.html($this.data('count'));
                } else {
                    setTimeout(function(){count($this)}, 50);
                }
    }
    $(".start-count").each(function(){
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
    });
})(jQuery);



//smooth scroll

$(document).ready(function(){
    $('.menu a').click(function(){
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) { 
        var $target = $(this.hash);
        $target = $target.length && $target 
        || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
          var targetOffset = $target.offset().top;
          $('html,body')
          .animate({scrolltop:  targetOffset}, 1000);
         return false;               
        }
    }
    });
});

// fixed header
jQuery(window).scroll(function(){
    if(jQuery(window).scrollTop() >= 10) {
        jQuery('#home').addClass('fixed-header');
        
    }
    else{
        jQuery('#home').removeClass('fixed-header');
    }
});


//scrll to top

$(document).ready(function(){
$(window).scrollTop(function(){
    if($(this).scrollTop() > 100) {
        $("arrow i").fadeIn();
        
    }
    else{
        $("arrow i").fadeOut();
    }
});
$("#arrow i").on('click',function(){
$("html,body").animate({
    scrollTop: 0
}, 600);
    return false;
    
});
    
});