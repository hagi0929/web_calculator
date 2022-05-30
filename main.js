function validate(evt) {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9*/+-]|\./;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}
function reset(){
    document.getElementById("display").value = 0;
}
function calculate(rcv){
    document.getElementById("display").value = eval(rcv);
}
document.getElementById('enter').addEventListener('click', function () {
    let eq = document.getElementById("display").value;
    calculate(eq)
})

document.getElementById('button0').addEventListener('click', function () {
    document.getElementById("display").value += '0';
})
document.getElementById('button1').addEventListener('click', function () {
    document.getElementById("display").value += '1';
})
document.getElementById('button2').addEventListener('click', function () {
    document.getElementById("display").value += '2';
})
document.getElementById('button3').addEventListener('click', function () {
    document.getElementById("display").value += '3';
})
document.getElementById('button4').addEventListener('click', function () {
    document.getElementById("display").value += '4';
})
document.getElementById('button5').addEventListener('click', function () {
    document.getElementById("display").value += '5';
})
document.getElementById('button6').addEventListener('click', function () {
    document.getElementById("display").value += '6';
})
document.getElementById('button7').addEventListener('click', function () {
    document.getElementById("display").value += '7';
})
document.getElementById('button8').addEventListener('click', function () {
    document.getElementById("display").value += '8';
})
document.getElementById('button9').addEventListener('click', function () {
    document.getElementById("display").value += '9';
})
document.getElementById('button_plus').addEventListener('click', function () {
    document.getElementById("display").value += '+';
})
document.getElementById('button_minus').addEventListener('click', function () {
    document.getElementById("display").value += '-';
})
document.getElementById('button_multiply').addEventListener('click', function () {
    document.getElementById("display").value += '*';
})
document.getElementById('button_divide').addEventListener('click', function () {
    document.getElementById("display").value += '/';
})