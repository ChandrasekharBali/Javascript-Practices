// Task 1 (Click Event)
// Create on button Click Me. 
// On the click on button showcase alert with text Hello Javascript

function clickme() {
    alert('Hello Javascript');
}

// Task 2 (onblur Event or onchange)
// Take three textboxes.
// Do multiplication of textbox 1 and 2 and store the result in textbox 3.

function onBlurEvent() {
let Num1 = document.getElementById('text1').value;
let Num2 = document.getElementById('text2').value;

document.getElementById('text3').value = Num1 * Num2;
}

// Task 3 (Keydown Event)
// Take a one textbox and apply Keydown event in that textbox
// On the click on textbox you have to showcase alert box and show the message (You have pressed a key inside text input!)

function keydownevent() {
alert('You have pressed a key inside text input!');
}


// Task 4 (Change Event)
// Create a dropdown with options of fruits
// add on change event and show selected value in strong tag

function onChangeEvent(myevent) {
document.getElementById('storefruitname').textContent = myevent.target.value;
}


// Task 6 (Click Event)
// Take a three button click on button and show one alert
function buttonClickEvent(value) {
    alert(value + 'clicked');
}

//Task 7 (Address Generator)
function onOperation() {
    let txtPlot = document.getElementById('txtPlot').value;
    let txtCity = document.getElementById('txtCity').value;
    let txtState = document.getElementById('txtState').value;
    let txtPin = document.getElementById('txtPin').value;

        if (!txtPlot || !txtCity || !txtState || !txtPin) {
            alert("Please fill all fields");
            return;
        }

    let fullAddress = `${txtPlot}, ${txtCity}, ${txtState}, ${txtPin}`;

    document.getElementById('address').textContent = fullAddress;


}
