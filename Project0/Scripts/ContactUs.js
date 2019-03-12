function saveChanges() {
    localStorage.name = document.getElementById('name').value
    localStorage.contactEmail = document.getElementById('email').value
    localStorage.query = document.getElementById('query').value
    console.log('saved')
}

function loadChanges() {
    if (localStorage.name != undefined) {
        document.getElementById('name').value = localStorage.name
    }
    if (localStorage.contactEmail != undefined) {
        document.getElementById('email').value = localStorage.contactEmail
    }

    if (localStorage.query != undefined) {
        document.getElementById('query').value = localStorage.query
    }
    console.log('loaded')
}
function validate() {
    if (document.getElementById('name').value == "") {
        alert("Please fill in your name!");
    }
    else if (document.getElementById('email').value == '') {
        alert('Please fill in your email:');
    }

    else if (document.getElementById('query').value == '') {
        alert('Please give us your feedback:');
    }
    else {
        alert('Thank you for your feedback!');
    }
}