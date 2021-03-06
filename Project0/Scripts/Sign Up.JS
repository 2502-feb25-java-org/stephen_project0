// ---Check User---
function checkUser() {
    debugger;
    if (localStorage.username == "admin" && localStorage.password == "Password123") {
        document.getElementById('gameLink').style.display = 'block';
    }
}
//---Save changes to text fields to Local Storage---
function saveChanges() {
    localStorage.firstName = document.getElementById('firstName').value
    localStorage.lastName = document.getElementById('lastName').value
    localStorage.gender = findRadioValue(document.getElementsByName('gender'))
    localStorage.age = document.getElementById('age').value
    localStorage.phoneNumber = document.getElementById('phoneNumber').value
    localStorage.email = document.getElementById('email').value
    localStorage.address1 = document.getElementById('address1').value
    localStorage.address2 = document.getElementById('address2').value
    localStorage.zipcode = document.getElementById('zipcode').value
    localStorage.state = document.getElementById('state').value
    localStorage.city = document.getElementById('city').value
    localStorage.country = document.getElementById('country').value
}
//---Initialize input fields---
function loadChanges() {

    if (localStorage.firstName != undefined) {
        document.getElementById('firstName').value = localStorage.firstName;
        console.log('first name found');
    }
    if (localStorage.lastName != undefined) {
        document.getElementById('lastName').value = localStorage.lastName;
        console.log("last name found");
    }
    if (localStorage.age != undefined) {
        document.getElementById('age').value = localStorage.age;
    }
    if (localStorage.phoneNumber != undefined) {
        document.getElementById('phoneNumber').value = localStorage.phoneNumber;
    }
    if (localStorage.email != undefined) {
        document.getElementById('email').value = localStorage.email;
    }
    if (localStorage.address1 != undefined) {
        document.getElementById('address1').value = localStorage.address1;
    }
    if (localStorage.address2 != undefined) {
        document.getElementById('address2').value = localStorage.address2;
    }
    if (localStorage.zipcode != undefined) {
        document.getElementById('zipcode').value = localStorage.zipcode;
    }
    if (localStorage.state != undefined) {
        document.getElementById('state').value = localStorage.state;
    }
    if (localStorage.city != undefined) {
        document.getElementById('city').value = localStorage.city;
    }
    if (localStorage.country != undefined) {
        document.getElementById('country').value = localStorage.country;
    }
// ---Gender Radio buttons---
// look at the array for the radio buttons, then find which index is checked,
// then set that index's .checked to true.

    var gender = document.getElementsByName('gender')
    var i = localStorage.gender;
    if (localStorage.gender != undefined) {
        gender[i].checked = true;
    }
    else { }
}
//---Finds which radio value is selected---
function findRadioValue(radioGroup) {
    for (let i = 0; i < radioGroup.length; i++) {
        if (radioGroup[i].checked) {
            return i;
        }
    }
}

//---Checks if all forms are filled--
function validateAgain() {
    var firstName = document.getElementById('firstName')
    var lastName = document.getElementById('lastName')
    //var gender=document.getElementsByName('gender')
    var age = document.getElementById('age')
    var phoneNumber = document.getElementById('phoneNumber')
    var email = document.getElementById('email')

    if (firstName.value == "") {
        alert("Please enter your first name");
    }
    else if (lastName.value == "") {
        alert("Please enter your last name");
    }
    else if (age.value == "") {
        alert("Please enter your age");
    }
    else if (validAge() == false) {
        alert("Please enter a valid age");
    }

    else if (phoneNumber.value == "") {
        alert('Please enter your phone number');
    }
    else if (email.value == '') {
        alert('Please enter your email');
    }

    else if (document.getElementById('address1').value == '') {
        alert('Please fill out Address line 1');
    }

    else if (document.getElementById('zipcode').value == '') {
        alert('Please enter your zipcode');
    }

    else if (document.getElementById('state').value == '') {
        alert('Please choose a state');
    }

    else if (document.getElementById('city').value == '') {
        alert('Please enter your city');
    }

    else if (document.getElementById('country').value == '') {
        alert('Please choose your Country');
    }
    else if (document.getElementById('country').value != 'US') {
        alert('We are only accepting US entries at this time');
    }
    else {
        alert('Your account has been created, thank you for signing up with us!');
        window.location.href = 'RevatureHomePage.html';
    }
}
//---Checks if firstName and lastName is the same---
function nameCheck() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;

    if (firstName.localeCompare(lastName) == 0) {
        alert("First name and last name cannot be the same");
    }
    else { }
}
//---Checks if inupt is a number---
function isNumber(event) {
    //debugger;

    let keycode = event.keyCode;
    var phoneNumLength = document.getElementById('phoneNumber');

    if (keycode >= 48 && keycode <= 57) {
        if (phoneNumLength.value.length < 10) {
            console.log('Can still type');
            return true;
        } else {
            console.log('Cannot Type');
            return false;
        }
    }
    else {
        console.log('false');
        return false;
    }
}
// ---check zipcode---
function isZipcode(event) {
    //debugger;
    let keycode1 = event.keyCode;
    var zipcodeLength = document.getElementById('zipcode');

    if (keycode1 >= 48 && keycode1 <= 57) {
        if (zipcodeLength.value.length < 5) {
            console.log('Can still type');
            return true;
        } else {
            console.log('Cannot Type');
            return false;
        }
    }
    else {
        console.log('false');
        return false;
    }
}
// ---Check age---
function validAge() {
    if (document.getElementById('age').value < 16 || document.getElementById('age').value > 100) {
        return false
    }
}
