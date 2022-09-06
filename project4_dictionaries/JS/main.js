//write a dictionary with a function that outputs kvp into an HTML:
function my_dictionary(){
    var player ={
        name:"TomB",
        member:"07",
        position:"quarterback",
        age:"45years",
        team:"buccaneers",
    };
    delete player.name; //write a delete statement that rmoves the key before its value is displayed:
    document.getElementById("Dictionary").innerHTML= player.name;
}