const text = [
"Web Developer",
"Graphic Designer",
"IT Student",
"Photographer",
"Photo Editor"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

if(count === text.length){
count = 0;
}

currentText = text[count];

letter = currentText.slice(0, ++index);

document.querySelector(".typing").textContent = letter;

if(letter.length === currentText.length){

setTimeout(() => {

count++;
index = 0;

type();

}, 1500);

}
else{

setTimeout(type, 100);

}

})();

/* Scroll Animation */

ScrollReveal().reveal(
'.hero-content,.about-container,.card,.glass',
{
distance:'80px',
duration:1500,
origin:'bottom',
interval:200
}
);