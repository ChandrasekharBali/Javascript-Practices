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

// Task 5 (Calculator)
function onCalculator(opp) {
const txtNum1 = parseFloat(document.getElementById('txtNum1').value);
const txtNum2 = parseFloat(document.getElementById('txtNum2').value);
let result;

if(isNaN(txtNum1) || isNaN(txtNum2)) {
    result = "Please enter valid numbers";
    console.log('Please enter valid numbers');
    alert('pls enter valid numbers');
}
else {
    switch(opp) {
        case 'add' :
            result = txtNum1 + txtNum2;
            break;
        case 'sub' :
            result = txtNum1 - txtNum2;
            break;
        case 'mul' :
            result = txtNum1 * txtNum2;
            break;
        case 'div' :
          if((txtNum2 !==0)) {
            result = txtNum1 / txtNum2;
          }
          else {
            result = "can't divide by zero";
          }
        
            break;
        default :
            result = 'invalid operation';
    
    }
}
document.getElementById('txtResult').value = result;

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
