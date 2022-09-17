function concatenate_function() {
    var one="Andrea";
    var two=" Zamrano";
    var three=" Ramirez";
    var four=" is my full name.";
    var whole_sentence=one.concat(two, three, four);
    document.getElementById("assigment44_concatenate").innerHTML=whole_sentence;
} //Assigment 44 concatenate

function assingment45_slice() {
    var text="the slice method extracts the selectod portion of the variable and prints it.";
    var section=text.slice(20, 31);
    document.getElementById("slice").innerHTML=section;
} //Assignment 45 Slice

function string_method() {
    var x=182;
    document.getElementById("number_string").innerHTML=x.toString();
}//assignment 46

function precision_method() {
    var edad=29.60;
    document.getElementById("precision").innerHTML=edad.toPrecision(2);
}