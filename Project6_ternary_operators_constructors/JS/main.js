function ride_function(){
    var height, can_ride;
    height=document.getElementById("height").Value;
    can_ride=(height<52) ? "you are too short":"you are tall enough";
    document.getElementById("ride").innerHTML=can_ride+"to ride";
} //we are assigning a value and ternary operator with determine which string is going to be written
