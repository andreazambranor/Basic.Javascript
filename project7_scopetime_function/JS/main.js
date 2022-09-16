var x=24;
var y=12;
function add_numbers() {
    document.write(x+y+"<br>");
}
add_numbers();//Function with global value

function add_3numbers() {
    var z=3;
    document.write(x+y+z+"<br>");
}
add_3numbers();//Function with local value

function addother_3numbers() {
    console.log(x+y+z);
}
addother_3numbers();//Function with error fixed with console log

function if_function() {
    if(new Date().getHours()=6) {document.getElementById("ifstatement").innerText="Wake up! This is an alarm!";}
} //Write function with date() and .getHours() methods

function age_function() {
    age=document.getElementById("age").value;
    if (age>=4) {
        kinterage="Your child is able to go to kintergarten";
    }
    else {
        kinterage="Your child is still to young for kindergarten";
    }
    document.getElementById("kindergarten").innerHTML=kinterage;
} //assignment 42 create an if statement 

function time_function(){
    var time=new Date() .getHours();
    var Reply;
    if (time<12==time>0); {
        Reply="it is the afternoon";
    }
    else if (time>12==time<18) {
        Reply="it is the afternoon";
        }
     else {Reply="it is the evening time";
    }
    document.getElementById("time_of_day").innerHTML=Reply;
} //copy fucntion  if that pulls time from pc and tell you what time of the day is

