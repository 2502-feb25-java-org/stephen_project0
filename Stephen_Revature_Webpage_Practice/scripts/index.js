/*data types:
number, string, boolean, object, null, undefined, NaN
variables

x = NaN; //global variables
alert(typeof(x));
console.log(x);

function Outer(){
    var outerData="outerData";
    function inner(){
        alert(outerData);
    }
    //inner(); //will run
    return inner;
}
// alert(outerData); //cannot access because of scope
var funcCall=Outer(); //holds the object for Outer();
funcCall;

closure
var add = (function () {
    debugger;
    var counter = 0;
    return function () {
        counter += 1; //gets placed into memory, and is reused whenever it is called
        return counter;
    }
})();
console.log(add()); //goes to 1
console.log(add()); //goes to 2

anonymous functions can only be used once. out of scope and memory once finished.

()=>alert('hi');// func declaration

(()=>alert('hi'))();
var resultExp=(a,b)=>(a*b); // same as below
console.log(resultExp(2,3));
console.log((((a,b)=>a*b)(5,3))); // arrow functions

function returnValue(){
    return 'hello world';
}
var functionItself=returnValue;
alert(functionItself);

(function varVsLet(){
    var function scope
    let block scope
    console.log('before declaration '+i);
    for (var i = 0; i < 5; i++) {
        console.log('after initialization ' + i);
    }
    console.log('outside forloop in function'+ i); //var would allow access, but not let
})();
console.log('outside function ' + i);

let creates a variable, you cannot declare again, while it works with var
let i =0;
var i =20; //this will fail
var i=10;
var i=39; //this would work!

---arrays---
'use strict' // cannot declare without var. used when you want security. 
prevents people from making incorrect scopes

let x=[]; //empty array
x=[1,2,3,4,'send helppppp', null, false];
for (let i = 0; index < x.length; i++) {
    console.log(x[i]);
}
x.forEach(function(e){
    console.log(e);
})

type coersion/conversion
var i=10;j='10';
console.log(i==j); // will be true

//---objects--
var obj={}// empty object
obj={
    name:'stephen', //JavaScript object (key value pairs)
    //'name':'stephen'      //this is JSON notation
    profession:'fullstack developer associate',

    sayDetails:function(){
        return obj.name+" "+this.profession;
    }
}
 
obj.height="117"
obj.color="brown"
obj['company'] = 'Revature'
//console.log(obj.sayDetail()+' '+obj["height"]+obj.company);  //can use . notation or with the brackets[]

var obj2={
    course:'Java',
    duration:'10 weeks',
    sayDetails2: obj.sayDetails
}
console.log(obj2.sayDetails2());

constructors in ES5
function Person(name, city){
    this.name=name;
    //this.profession=profession;
    this.city=city;
    this.sayDetails=function(){
        console.log(name+"-"+city);
    }
}

let objPushpinder=new Person('Pushpinder', 'New York');
objPushpinder.sayDetails();

function Student(name, age, city, school){
    this.school=school;
    this.age=age;
    this.__proto__=new Person(name, city); //inheritance. parent is Person
}
let objStudent=new Student('Brandon', '45', 'Yes town', 'of Rock');
objStudent.sayDetails();

//---
class PersonClass{
    constructor(name, age, city){
        this.name=name;
        this.age=age;
        this.city=city;
    }
    sayDetails(){
        console.log(this.name+' '+this.city);
    }
}

class StudentClass extends PersonClass{ //inheritance
    constructor(name,age,city,fingers){
        super(name,age,city);
        this.fingers=fingers;
    }
}

//---Make a habit of using let---

let student=new StudentClass('Stephen', 89, 'Bazinga', 12);
student.sayDetails();
*/
//---