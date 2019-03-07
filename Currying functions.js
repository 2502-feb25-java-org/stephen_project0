'use strict'
console.log('first run');

var add=function(a){
    var total=0;
    return function(b){
        return function(c){
            return a+b+C;
        }
    }
}

console.log(add(5));

var addToNested=add(5); //return 5+b+C
var addToInnerMost=addToNested(6); // returns 5+6+c
console.log(addToInnerMost(7));

add(5)(6)(7); //Currying Process

//Ajax + JSON
var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

var xhr=new XMLHttpRequest();
var data={};

xhr.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        data=JSON.parse(this.responseText);
        console.log(data);
        Header.innerHTML=data.squadName;
    }
}
xhr.open('GET',requestURL, true);
xhr.send();

/*  1xx-Informational
    2xx Success
    3xx Redirectional
    4xx Bad Response (error is in code)
    5xx server error