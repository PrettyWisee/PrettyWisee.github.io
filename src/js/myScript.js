$(document).ready(function() {
  $(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();
    $(".section").each((i, el) => {
      if ($(el).offset().top - $("nav").outerHeight() <= scrollDistance) {
        $("nav a").each((i, el) => {
          if ($(el).hasClass("active")) {
            $(el).removeClass("active");
          }
        });
        $('nav li:eq(' + i + ')').find('a').addClass('active');
      }
    });
  });
});

var siteType = {
  b: "a",
  a: "b",
  c: "c"
};

let Design = {
  a: "a",
  b: "b",
  c: "c",
};
console.log(Design);
let Adaptability = {
  a: "a",
  b: "b",
  c: "c",
};
console.log(Adaptability);
let sum = 0;


/*let siteTypetwo = "form-select"
if (siteTypetwo == "One") {
  sum = sum + 100;
} else if (siteTypetwo == "Two") {
  sum = sum + 50;
} else if (siteTypetwo == "Three") {
  sum = sum + 10;
};



let DesignTwo = prompt("Design", "a,b,c")
if (DesignTwo == "a") {
  sum = sum + 300;
} else if (DesignTwo == "b") {
  sum = sum + 540;
} else if (DesignTwo == "c") {
  sum = sum + 170;
};


let AdaptabilityTwo = prompt("Adaptability", "1,2,3")
if (AdaptabilityTwo == "a") {
  sum = sum + 600;
} else if (AdaptabilityTwo == "b") {
  sum = sum + 940;
} else if (AdaptabilityTwo == "c") {
  sum = sum + 270;
};

console.log(sum);
alert("Сумма =" + sum);*/

$('a[href^="#"]').click(function() {
  let valHref = $(this).attr("href");
  $('html, body').animate({
    scrollTop: $(valHref).offset().top - 60 + "px"
  });
});
$(document).ready(function() {
let options = {
  threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = $('.element-animation');
elements.each((i, el) => {
  observer.observe(el);
});
});
function onEntry (entry){
  entry.forEach(change => {
    if (change.isIntersecting){
      change.target.classList.add('animationShow')
    }
  });
}
$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});
(function ($) {
  $(function () {

        calculate();
        jQuery('#calculator input, #calculator select').change(function() {
            calculate();
        });
        jQuery('#calculator input').keyup(function() {
            calculate();
        });
         total = 0;

            switch (calcInputs.texture) {
                case '1':
            total += calcInputs.area * 113;
            break;
                case '2':
            total += calcInputs.area * 180;
            break;
                case '3':
            total += calcInputs.area * 180;
            break;
            default:
            break;
          };
            total += ' руб.';
    jQuery(this).find('p.total').html(total);
});
}

});
})(jQuery);
;
