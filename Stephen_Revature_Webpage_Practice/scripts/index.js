'use strict'
/*alert('hi');
//this won't work until the body element is loaded into the DOM tree
//document.body.style.backgroundColor="Azure";


//Window object is the global object and all global variables/object falls under window
function loadWindow(){
    document.body.style.backgroundColor='Azure';
}
Window.onload=function(){loadWindow;    
}();

// on <eventname></eventname>

window.addEventListener('load',()=>{
    document.body.style.backgroundColor='Azure';
    let header=document.getElementsByTagName('h1')[0]; //Get header
    header.textContent='DOM API changed the header'; //change the text
});

window.addEventListener('DOMContentLoaded',()=>{
    var table=document.getElementById ('the-table');
    //document.getElementById('the-table').border = 3; // also works to change border
    var tblAttrs=table.attributes;
    for (let i = 0; i < tblAttrs.length; i++) {
        table.setAttribute('style','border:solid');
        if (tblAttrs[i].nodeName.toLowerCase()=="border")
            table.border="5px";
            table.border="solid";
    }
});

function storeSearch(){
    var searchBox=document.getElementById('searchbox').value;
    localStorage.search=searchBox;
}
function loadOldSearch(){
    var searchBox=document.getElementById('searchbox');
    searchBox.value=localStorage.search;
}
*/
window.addEventListener('DOMContentLoaded',()=>{
    let header=document.getElementById('header1');
    let colA=document.getElementById('colA');

    let clickCounter=0;

    header.addEventListener('click', ()=>{
        clickCounter++;
        header.textContent=`DOM changed the text (clicked ${clickCounter}) times`;
        colA.innerHTML=`<em>col</em> <u>A</u>`;
    })
    colA.addEventListener('mouseover',()=>{
        console.log('mouseover');
        let footerElement=document.createElement('h6');
        footerElement.textContent=`&copy; reserved 2019`;
        document.body.appendChild(footerElement);
    })
});
