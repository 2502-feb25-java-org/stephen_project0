function saveChanges() {
    var firstName=document.getElementById('firstName').value 
    var lastName=document.getElementById('lastName').value
    var gender=document.getElementsByName('gender')
    var age=document.getElementById('age').value
    var phoneNumber=document.getElementById('phoneNumber').value
    var email=document.getElementById('email').value 

    localStorage.firstName=firstName;
    localStorage.lastName=lastName;
    localStorage.gender=findRadioValue(gender);

    localStorage.age=age;
    localStorage.phoneNumber=phoneNumber;
    localStorage.email=email;
}

function loadChanges(){
    var firstName=document.getElementById('firstName')
    var lastName=document.getElementById('lastName')
    var gender=document.getElementsByName('gender')
    var age=document.getElementById('age')
    var phoneNumber=document.getElementById('phoneNumber')
    var email=document.getElementById('email')
    var i = localStorage.gender;

    firstName.value=localStorage.firstName;
    lastName.value=localStorage.lastName;

    if (localStorage.gender != null) {  
            gender[i].checked=true;
    }
    else{}

    age.value=localStorage.age;
    phoneNumber.value=localStorage.phoneNumber;
    email.value=localStorage.email;
}

function findRadioValue(radioGroup){
    for (let i = 0; i < radioGroup.length; i++) {
        if(radioGroup[i].checked){
            return i;
        }
        
    }
}

function validateForm(){
    var firstName=document.getElementById('firstName') 
    var lastName=document.getElementById('lastName')
    var gender=document.getElementsByName('gender')
    var age=document.getElementById('age')
    var phoneNumber=document.getElementById('phoneNumber')
    var email=document.getElementById('email')
    debugger;
    if(!firstName.checkValidity()){
        alert('You must fill out the forms');
    }
    else console.log('good');
}

function validateAgain(){
    var firstName=document.getElementById('firstName') 
    var lastName=document.getElementById('lastName')
    //var gender=document.getElementsByName('gender')
    var age=document.getElementById('age')
    var phoneNumber=document.getElementById('phoneNumber')
    var email=document.getElementById('email')
    
    if(firstName.value == ""){
        alert("Fill First Name!");
    }
    else if(lastName.value ==""){
        alert("fill last name");
    }
    else if(age.value == ""){
        alert("fill age");
    }
    else if(phoneNumber.value == ""){
        alert('fill phone number');
    }
    else if(email.value==''){
        alert('fill email');
    }
    else alert('good job!')
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