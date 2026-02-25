 // Task1: create 3 variables to store firstName, middleName, lastName and Generate fullName by joining 3 variable and print full name in console.
        var firstName = 'Chandra';
        var middleName = 'Sekhar';
        var lastName = 'Bali'

        var fullName = `${firstName} ${middleName} ${lastName}`;

        console.log(fullName);

        // create variables to store student details like name, contactNo, FatherName, MotherName, Class,RollNo and print it in console
        const studentDetails = {
            name: 'Chandrasekhar Bali',
            contactNo: '+91 9999999999',
            fatherName: 'pyditalli',
            motherName: 'Kumari',
            class: '10th',
            rollNo: '6'
        }

        console.log(studentDetails);


        // create variable to store address, city ,state and pincode- and print address and city in console
        const myAddress = {
            address: '1-22-28, Adarsh Nagar',
            city: 'Visakhapatnam',
            state: 'Andhra Pradesh',
            pincode: '530017'
        }

        console.log(
            `
    Address: ${myAddress.address}, city: ${myAddress.city}
    `
        );



        // Task2: create currentDate variable and store current Date into it and show that in alert popup
        const currentDate = new Date();

        console.log(currentDate);

        const formatDate = `${currentDate.getDate()} - ${currentDate.getMonth() + 1} - ${currentDate.getFullYear()}`;

        // alert(formatDate);


        // create variables to store patient data - name, age, address, contactNo and print name & age in console

        const patient = {
            name: 'Gandhi',
            age: '60',
            address: 'Gujrat',
            contactNo: '9999999999'
        }

        console.log(`Name: ${patient.name}, Age: ${patient.age}`);


        // task3

        // alert('script 2 loaded');

        //task4
        //Create 2 variable num1 assign value = 1122, num2 == 3344
        // show both varible in alert popup
        // after alert now replace value of num1 with num2 & num2 with num1
        // now show updated value in alert again

        // task3
// alert('script 1 loaded');


        let num1 = 1122;
        let num2 = 3344;

        // alert(`num1: ${num1}, num2: ${num2}`);

        // [num1, num2] = [num2, num1];

        // alert(`num1: ${num1}, num2: ${num2}`);


        //task5
        // Task - String Concatenation Challenge
        // Create 4 variables to store: product name, price, quantity, and discount percentage
        // Calculate the final price: (price × quantity) - (discount percentage of total)
        // Create a formatted string: "Product: [name], Original Total: $[amount], Discount: $[discount], Final Price: $[final]"
        // Print the formatted string in console and in an alert

        const product = {
            name: 'My Product1',
            price: 500,
            quantity: 2,
            discount: 10
        }

        const finalPrice = product.price * product.quantity;

        const discountedValue = finalPrice * (product.discount / 100);

        const finalDiscountedPrice = finalPrice - discountedValue;

        const formattedString = `Product: ${product.name}, Original Total: $${finalPrice}, Discount: $${discountedValue}, Final Price: $${finalDiscountedPrice}`;

        // alert(formattedString);
        console.log(formattedString);


        // Task6
        // Task - Age Calculator
        // Create variables for birth year, current year, and birth month
        // Calculate age in years and months
        // Display: "You are [X] years and [Y] months old" in console
        // Create a button that shows this info in an alert

        const birthYear = 1994;
        const birthMonth = 4;
        const date = new Date()
        const currentYear = date.getFullYear();
        const currentMonth = date.getMonth() + 1;


        let ageYears = currentYear - birthYear;
        let ageMonths = currentMonth - birthMonth;

        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }

        const message = `You are ${ageYears} years and ${ageMonths} months old`;

        console.log(message);



        //Task7
        // Task - Temperature Converter
        // Create a variable to store temperature in Celsius
        // Convert to Fahrenheit: (C × 9/5) + 32
        // Convert to Kelvin: C + 273.15
        // Display all three temperatures formatted as: "Celsius: X°C, Fahrenheit: Y°F, Kelvin: Z°K"
        // Print in both console and a paragraph tag

        let temperatureInCelcius = 100;

        let temperatureInFahrenheit = (temperatureInCelcius * 9 / 5) + 32;

        let temperatureInKelvin = temperatureInCelcius + 273.15;

        const tempMessage = `Celsius: ${temperatureInCelcius}°C, Fahrenheit: ${temperatureInFahrenheit}°F, Kelvin: ${temperatureInKelvin}°K`;

        document.getElementById('temperatureOutput').textContent = tempMessage;

        console.log(tempMessage);

        //Advance Task
        //Task1
        // Create a boolean Variable Store some value in it
        // if value is true print "Value is Success" if false print "Value is Danger"

        const isActive = false;

        if (isActive) {
            console.log('Value is Success');
        }
        else {
            console.log('Value is Danger');
        }

        //Task2
        // Create 2 variable to store first, middle & last name
        // Create a button => Get First Charactors
        // On click - get First charactors of all the variable and Join them with " - " and Print it in console
        // Ex. Sachin Ramesh Tendulkar => C-R-T

        const fistNamee = 'chandra';
        const middleNamee = 'sekhar';
        const lastNamee = 'bali';

        const firstLetters = fistNamee[0].toUpperCase().concat('-', middleNamee[0].toUpperCase(), '-', lastNamee[0].toUpperCase());
        console.log(firstLetters);

        //Task3
        // Create A varible Store Current Date into it
        // now create a Formated Date by using value store in variable(Use Date Functions Refer W3School)
        // Year "/" Month "/" Day

        let myDate = new Date();
        let year = myDate.getFullYear();
        let month = myDate.getMonth() + 1;
        let Day = myDate.toLocaleDateString("en-IN", { weekday: "long" });;

        let formattedDate = `${year} / ${month} / ${Day}`;

        // console.log(myDate);
        console.log(formattedDate);

        //Task4
        // Create 3 varibales to store ProductName, Price, discount
        // now Enter Some data into it. add some decimal values into price with 4-5 digits after decimal ex 23.54655
        // now create new String like - product Name is "ProdutName" Original price is "price" with Discount "dicount"% => new Final price will be "New Price"
        // calculate Final price by adding discount to original Price

        const Product = {
            name: 'New Product',
            price: 23.54655,
            discount: 10
        }
        const productName = Product.name;
        const originalPrice = Product.price;
        const totalDiscount = originalPrice * (Product.discount / 100);

        const finallPrice = originalPrice - totalDiscount;

        let roundedPrice = Math.round(finallPrice);
        console.log(roundedPrice);

        const productData = `product Name is "${productName}" Original price is "${originalPrice}",  with Discount "${Product.discount}"% => new Final price will be ${finallPrice}`;

        console.log(productData);


        //Task5
        // Create textarea to Enter Some sentences below that create a textbox and a button "Search"
        // now enter some sentence into textarea ..
        // now if we enter some word into textbox on button click we need to check if that word is present in textarea
        // For Ex: "Hi my name is Rahul and my city is Pune" this is in textare and in serach textbox we enter "city" on button click we should show alert city exist in textara else City not present



        const form = document.getElementById('myform');

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const textArea = document.getElementById('textarea').value;
            const textInput = document.getElementById('textinput').value;
            const searchButton = document.getElementById('searchbtn');

            const resultOutput = textArea.toLowerCase().includes(textInput.toLowerCase());

            if (resultOutput) {
                alert(textInput + ' exist in textara');
            }
            else {
                alert(textInput + ' not present');
            }

        });

        // Task6
        // create a textarea Where User will enter Some Sentence
        // Create a textbox with placeholder "Replace word" , create 2nd textbox with placeholder "Replace with"
        // Create a button "Replace"
        // On Click of Replace - you need to replace word you enter in 1st textbox with word u enter with 2nd textbox in Sentence from textarea and Print that newly Created Sentences into <p> tag

        const newForm = document.getElementById('myform1');

        newForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const myTextArea = document.getElementById('textarea1').value
            const replaceWord = document.getElementById('textinput1').value;
            const replaceWith = document.getElementById('textinput2').value;

            const finalTextarea = myTextArea.replace(new RegExp(replaceWord, "gi"), replaceWith);

            document.getElementById('newText').textContent = finalTextarea;

        });