var chang_No = document.getElementById('chang_No');

var addition = 0;
var subtraction = 0;

var decrease = document.getElementById('decrease');
decrease.addEventListener('click', () => {
    subtraction = subtraction - 1;
    addition = subtraction;
    chang_No.textContent = subtraction;
    if (subtraction <= -1) {
        chang_No.style.color = "red";
    } else if (addition >= 1) {
        chang_No.style.color = "green";
    } else {
        chang_No.style.color = "#102A42";
    }
})

var zero = 0;
var reset = document.getElementById("reset");
reset.addEventListener('click', () => {
    chang_No.textContent = zero;
    chang_No.style.color = "#102A42";
    addition = 0;
    subtraction = 0;



})

var increase = document.getElementById('increase');
increase.addEventListener('click', () => {
    addition = addition + 1;
    subtraction = addition;
    chang_No.textContent = addition;
    if (subtraction <= -1) {
        chang_No.style.color = "red";
    } else if (addition >= 1) {
        chang_No.style.color = "green";
    } else {
        chang_No.style.color = "black";
    }
})