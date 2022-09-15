function ride_function() {
    var height, can_ride;
    height=document.getElementById("height").Value;
    can_ride=(height<52) ? "you are too short":"you are tall enough";
    document.getElementById("ride").innerHTML=can_ride+"to ride";
} //we are assigning a value and ternary operator with determine which string is going to be written

function vehicle (make, model, year, color) {
    this.vehicle_make=make;
    this.vehicle_model=model;
    this.vehicle_year=year;
    this.vehicle_color=color;
} //Object constructor challenge 36

var jack=new vehicle("dodge", "viper", 2020, "red");//New instance
var emily=new vehicle("jeep", "trail hawk", 2019, "white and black");//new instance
var erick=new vehicle("ford", "pinto", 1971, "mustard");//new instance
function myfunction() {
    getElementById("keywords_and_constructions").innerHTML=
    "erick drives a"+erick.vehicle_color+"-colored"+erick.vehicle_model+" manufactured in "+erick.vehicle_year;
}//function that returns the description of an object

function player(name, surname, age, team) {
    this.plaer_name=name;
    this.player_surname=surname;
    this.player_age=age;
    this.player_team=team;
}//object constructor challenge 37

var player12=new player("Aaron", "Rodgers", 38, "Green Bay");
var Player9=new player("Christian", "Watson", 23, "Green Bay");
var player33=new player("Aaron", "JOnes", 27, "Green Bay");
function player_function() {
    getElementById(new_and_this).innerHTML="player 12 is "+player12.player_name+player12.player_surname+" and is "+player12.player_age+" years old.";
} // function to return player

function mynestedfunction() {
    document.getElementById("nested_function").innerHTML=nested();
    function nested() {
        var x=24;
        function addten() {x+=10;}
        addten();
        return x;
    }
}