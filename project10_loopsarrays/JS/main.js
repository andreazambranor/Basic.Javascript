//ASSIGNMENT 51 CREATE A LOOP
function callloop() {
    var sizes="";
    var num=5;
    while (num<12) {
        sizes+="<br>"+num;
        num++;
    }
    document.getElementById("loop").innerHTML=sizes;
}

//ASSIGNMENT 51 WRITE A FOR LOOP 
var students=["Andrea", "Paris", "Sofia", "Roberto", "Israel", "Salvador"];
var content="";
var L;
function forloop() {
    for (L=0; L<students.length; L++) {
        content+=students[L]+"<br>";
    }
    document.getElementById("studentlist").innerHTML=content;
}

//ASSIGNMENT 52 CREATEARRAY
function createarray() {
    var student_size=[];
    student_size[0]=5;
    student_size[1]=10;
    student_size[2]=5;
    student_size[3]=5;
    student_size[4]=9;
    student_size[5]=10;
    document.getElementById("array").innerHTML="The student is "+student_size[4]+".";
}

//ASSINGMENT 53 CONSTANT
function constantfunction() {
    const person={name:"Andrea", lastname:"Zambrano", gender:"female"};
    person.age=29;
    person.nationality="mexican";
    document.getElementById("constant").innerHTML=person.name+" is "+person.age+" years old.";
}

//ASSIGMENT 54 LET
var B="andrea";
document.getElementById("letkeyword").innerHTML=B;
{
    let B="roberto";
    document.getElementById("letkeyword2").innerHTML=B;
}
document.getElementById("letkeyword3").innerHTML=B;

//ASSIGNMENT 55 OBJECT
let class1={
    subject:"spanish ",
    teacher:"Mr Jaskin ",
    classroom:"305 ",
    day:"Monday ",
    time:"10 a.m. ",
    description: function() {
        return "Your first class is "+this.subject+"with "+this.teacher+"in classroom "+this.classroom+"on "+this.day+"at "+this.time;
    }
};
document.getElementById("clasobject").innerHTML=class1.description();