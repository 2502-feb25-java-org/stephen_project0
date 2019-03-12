function saveRemember() {
    debugger;
    if (document.getElementById('remember').checked == true) {
        localStorage.accountname = document.getElementById('accountname').value
        localStorage.remember = document.getElementById('remember').value
        console.log('saved');
    }
    else {
        localStorage.remember = "off";
        console.log('not Saved');
    }
}

function loadRemember() {
    if (localStorage.remember == 'on') {
        document.getElementById('accountname').value = localStorage.accountname
        document.getElementById('remember').checked = true;
        console.log('loaded');
    }
}

function validate() {
    if (document.getElementById('accountname').value == "") {
        alert("Please enter your username!");
    }
    else if (document.getElementById('password').value == "") {
        alert('Please put in your password!');
    }
    else if (document.getElementById('accountname').value == "admin" && document.getElementById('password').value == "Password123") {
        document.getElementById('gameLink').style.display = 'block';
        localStorage.username = document.getElementById('accountname').value;
        localStorage.password = document.getElementById('password').value;    
        window.location.href = 'gamepage.html';
    }
    else {
        localStorage.username = document.getElementById('accountname').value;
        localStorage.password = document.getElementById('password').value;
        window.location.href = 'RevatureHomePage.html';
    }

}
    function checkUser() {
        if (localStorage.username == "admin" && localStorage.password == "Password123") {
            document.getElementById('gameLink').style.display = 'block';
        }
    }