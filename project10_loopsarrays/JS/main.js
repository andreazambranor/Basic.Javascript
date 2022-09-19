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
