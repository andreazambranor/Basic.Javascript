function my_division() {
    var resultvalue = 100/5;
    document.getElementById("division").innerHTML="100/5="+resultvalue;
}

function substraction_function() {
    var result = 10;
    x-=5; 
    document.getElementById("substraction").innerHTML="10-5="+substraction_function; 
}

function my_multiplication(){
    var values =10*5;
    document.getElementById("multiplication").innerHTML="10*5="+values;
}

function addition_Function () {
    var addition= 2 + 2 ;
    document.getElementById("math") .innerHTML = "2 + 2 =" + addition;
}
function my_operations () {
    var multiplevalues = (10+5) * 5 / 3 - 5;
    document.getElementById("multipleoperations").innerHTML = "10 plus 5, multiplied by 5, divided in 3 and then substrac 5 equals" + multiplevalues;
}

function my_modulusoperator () {
    var divisionreemainder = 19%2;
    document.getElementById("modulus").innerHTML="when you divide 19 by 2 you have a reminder of:"+divisionreemainder;
}

function negation_Operator() {
    var x=10;
    document.getElementById("negotiation_Operator").innerHTML= -x;
}

var numinc=30;
numinc++;
document.write(numinc);

var numdec=30;
numdec--;
document.write(numdec);

window.alert(Math.random());

window.alert(Math.random()*100);

document.getElementById("mathobj").innerHTML=Math.PI;