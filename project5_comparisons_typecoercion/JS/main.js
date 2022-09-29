document.write(typeof "computer")

function notanumber() {
    document.getElementById("test").innerHTML = isNaN('hello darling');
} //Utilize JavaScript to make the browser display NAN



document.write(-3E310); //Use socument.write to diplay infinity

document.write (2e310); //Use document.write to displa -infinity

document.write(24<12); //Use Boolean Logic to display false

document.write(24>12); //Use Boolean Logic to display true

console.log(24+3); //Perform a math operation with the console.log function

document.write("24"-12); //Utilize type coercion 

console.log(03>12); //Display false in the console using Boolean logic

document.write(24==03); //Utilize == to return false

document.write(24==(20+4)); // Utilize == to return true

function main() {
    var a=24;
    var b="24";
    var c=24;
    var d=34;
    var e="34";

document.write(a===c); //Return true by ensuring to match data type and value

document.write(a===e); //Return false by writing a different data type and different value

document.write(a===b); //Return false by writing a different data type but the same value for both.

document.write(a===c); //Return false by writing the same data type but a different value for both.

document.write(24>3 && 3<12); //Utilize AND operator to display true

document.write(24<3 && 3<12); //Utilize AND operator to display false

document.write(24>12 || 24<12); // Utilize OR operator to display true

document.write(24<12 || 24<3); //Utilize OR operator to display false
}

function Not_false() {
    document.getElementById("notF").innerHTML=!(24>12);
} //Utilize the NOT operator to display false

function Not_true() {
    document.getElementById("notT").innerHTML=!(24>12);
} //Utilize the not operator to display true

