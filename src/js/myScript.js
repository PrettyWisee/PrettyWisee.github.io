"use strict"
$(document).ready(function() {
  $(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();
    $(".section").each((i, el) => {
      if ($(el).offset().top - $("nav").outerHeight() <= scrollDistance) {
        $("nav a").each((i, el) => {
          if ($(el).hasClass("menu li a")) {
            $(el).removeClass("menu li a");
          }
        });
        $('nav li:eq('+ i +')').find('a').addClass('menu li a');
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


let siteTypetwo = prompt("siteType", "a,b,c")
if (siteTypetwo == "a") {
  sum = sum + 100;
} else if (siteTypetwo == "b") {
  sum = sum + 50;
} else if (siteTypetwo == "c") {
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
alert("Сумма =" + sum);
$('a[href^="#"]').click(function() {
  let valHref = $(this).attr("href");
  $('html, body').animate({
    scrollTop: $(valHref).offset().top - 60 + "px"
  });
});
