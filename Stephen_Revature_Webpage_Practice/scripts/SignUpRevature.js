//---Save changes to text fields to Local Storage---
function saveChanges() {
    var firstName = document.getElementById('firstName').value
    var lastName = document.getElementById('lastName').value
    var gender = document.getElementsByName('gender')
    var age = document.getElementById('age').value
    var phoneNumber = document.getElementById('phoneNumber').value
    var email = document.getElementById('email').value

    localStorage.firstName = firstName;
    localStorage.lastName = lastName;
    localStorage.gender = findRadioValue(gender);

    localStorage.age = age;
    localStorage.phoneNumber = phoneNumber;
    localStorage.email = email;
}
//---Initialize input fields---
function loadChanges() {
    var firstName = document.getElementById('firstName')
    var lastName = document.getElementById('lastName')
    var gender = document.getElementsByName('gender')
    var age = document.getElementById('age')
    var phoneNumber = document.getElementById('phoneNumber')
    var email = document.getElementById('email')
    var i = localStorage.gender;

    firstName.value = localStorage.firstName;
    lastName.value = localStorage.lastName;

    if (localStorage.gender != null) {
        gender[i].checked = true;
    }
    else { }

    age.value = localStorage.age;
    phoneNumber.value = localStorage.phoneNumber;
    email.value = localStorage.email;
}
//---Finds which radio value is selected---
function findRadioValue(radioGroup) {
    for (let i = 0; i < radioGroup.length; i++) {
        if (radioGroup[i].checked) {
            return i;
        }

    }
}

// function validateForm(){
//     var firstName=document.getElementById('firstName') 
//     var lastName=document.getElementById('lastName')
//     var gender=document.getElementsByName('gender')
//     var age=document.getElementById('age')
//     var phoneNumber=document.getElementById('phoneNumber')
//     var email=document.getElementById('email')
//     debugger;
//     if(!firstName.checkValidity()){
//         alert('You must fill out the forms');
//     }
//     else console.log('good');
// }
//---Checks if all forms are filled--
function validateAgain() {
    var firstName = document.getElementById('firstName')
    var lastName = document.getElementById('lastName')
    //var gender=document.getElementsByName('gender')
    var age = document.getElementById('age')
    var phoneNumber = document.getElementById('phoneNumber')
    var email = document.getElementById('email')

    if (firstName.value == "") {
        alert("Fill First Name!");
    }
    else if (lastName.value == "") {
        alert("fill last name");
    }
    else if (age.value == "") {
        alert("fill age");
    }
    else if (phoneNumber.value == "") {
        alert('fill phone number');
    }
    else if (email.value == '') {
        alert('fill email');
    }
    else alert('good job!')
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

    var keycode = event.keyCode;
    var phoneNumLength=document.getElementById('phoneNumber');

    if (keycode >= 48 && keycode <= 57) {
        if (phoneNumLength.value.length <10) {
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

// function assignValue(localStorageName, value){
//     debugger;

//     if(value == ""){
//         localStorageName.toString();
//         localStorage.setItem(localStorageName.name, "");
//     }
//     else{
//         localStorage.setItem(localStorageName, value);
//     }
// }
var testFunction=()=>{
    alert(fizzBuzzDiv(document.getElementById('age').value));
    console.log('clicked');
};