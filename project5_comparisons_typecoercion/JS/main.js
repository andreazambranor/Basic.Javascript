document.write(typeof "computer")

function notanumber() {
    document.getElementById("test").innerHTML=0/0;
} //Utilize JavaScript to make the browser display NAN

document.getElementById("test").innerHTML=isNaN('hello darling'); //Utilize the Nnan function to diplay false

document.getElementById("test").innerHTML=isNaN('24'); //Utilize the NaN function to display true

document.getElementById("positive").innerHTML=('240312E230493'); //Use getElementById to diplay infinity

document.getElementById("negative").innerHTML=('-240312E240393'); //Use getElementById to displa -infinity

document.write(24<12); //Use Boolean Logic to display false

document.write(24>12); //Use Boolean Logic to display true

console.log(24+3); //Perform a math operation with the console.log function

document.write("24"-12); //Utilize type coercion 