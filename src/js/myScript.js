/*Anchor*/
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
/*Anchor*/
let sum = 0;
/*Discount*/
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
/*Discount*/
/*(function ($) {
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
;*/
//Kalkulator 2.0
var Type,
    Price,
    Total;

    Total = $('#totalPrice')
    Price = 0;

function calculatePrice(){
  var PriceType = $('select[name=Type]: selekted','#calculator').val();
  var PriceDesign = $('select[name=Design]: selekted','#calculator').val();
  var PriceAdaptability = $('select[name=Adaptability]: selekted','#calculator').val();

  PriceType = parseInt(PriceType);
  PriceDesign = parseInt(PriceDesign);
  PriceAdaptability = parseInt(PriceAdaptability);

  Price = PriceType + PriceDesign + PriceAdaptability;
  alert(calculatePrice);

Total.text(Price);
};



$('#calculator select').on('change',function(){
calculatePrice();
});
//Kalkulator 2.0
