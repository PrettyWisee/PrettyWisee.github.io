"use strict"

var siteType = {b:"a",a:"b",c:"c"};

let Design = {
  a:  "a",
  b: "b",
  c: "c",
};
console.log(Design);
let Adaptability = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(Adaptability);
let sum = 0;


let siteTypetwo = prompt ("siteType","a,b,c")
if (siteType == "a"){
  sum = sum + 100;
}
else if (siteType == "b") {
  sum = sum + 50;
} else if (siteType == "c"){
sum == sum + 10;
};
console.log(siteTypetwo);


let DesignTwo = prompt("Design","a,b,c")
if (Design == "a"){
  sum = sum + 300;
}
else if (Design == "b") {
  sum = sum + 540;
} else if (Design == "c"){
sum == sum + 170;
};
console.log(Design);

let AdaptabilityTwo = prompt("Adaptability","1,2,3")
if (Adaptability == "1"){
  sum = sum + 600;
}
else if (Adaptability == "2") {
  sum = sum + 940;
} else if (Adaptability == "3"){
sum == sum + 270;
};

console.log(sum);
