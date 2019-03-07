//---Save changes to text fields to Local Storage---
function saveChanges() {
    localStorage.firstName = document.getElementById('firstName').value
    localStorage.lastName = document.getElementById('lastName').value
    localStorage.gender = findRadioValue(document.getElementsByName('gender'))
    localStorage.age = document.getElementById('age').value
    localStorage.phoneNumber = document.getElementById('phoneNumber').value
    localStorage.email = document.getElementById('email').value
    localStorage.address1= document.getElementById('address1').value
    localStorage.address2=document.getElementById('address2').value
    localStorage.zipcode=document.getElementById('zipcode').value
    localStorage.state=document.getElementById('state').value
    localStorage.city=document.getElementById('city').value
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
