
document.addEventListener("DOMContentLoaded", function() {
    console.log("dom is here");
});

var secHand = document.getElementById('second');
var minHand = document.getElementById('minute');
var hrHand = document.getElementById('hour');
var sec;
var min;
var hr;
var degS = 0;
var degM = 0;
var degH = 0;




// setInterval(seconds, 1000)

// Second Hand Motion, 6 decgrees per second,
function seconds() {
    console.log("secHand = " + secHand);
    degS = (degS + 6);
    secHand.style.transform = ('rotate(' + degS + 'deg)');
    console.log('rotate(' + degS + 'deg)');
}
setInterval(seconds, 1000);
setInterval(minutes, 60000);
setInterval(hours, 3600000);

//Minute Hand Motion, 6 degrees per minute,

function minutes() {
    console.log("minHand = " + minHand);
	degM = (degM + 6);
    minHand.style.transform = ('rotate(' + degM + 'deg)');
    console.log('rotate(' + degM + 'deg)');
}


// Hour Hand motion, 30 degrees per hour
function hours() {
    console.log("hrHand =" + secHand);
	degH = (degH + 30);
    hrHand.style.transform = ('rotate(' + degH + 'deg)');
    console.log('rotate(' + degH + 'deg)');
}
// do 
// {
//alert(degreesMinSec + "this is degreesMinSec at top of loop");
//secHand.style.transform = "rotate(7deg)";

//second.style.transform = "rotate(degreesMinSec + 7);
//degreesMinSec = degreesMinSec + 7;
//document.getElementById("second");
//el.style.transform = "rotate(" + degreesMinSec + "degreesMinSec)";
//alert(degreesMinSec + "this is degreesMinSec in bottom of loop");
/*i++;
//alert(i);
}
while (i < 4)
*/

/*

document.getElementById("second").style.transform = "rotate(degreesMinSec)";

var text = "";
var i = 0;
do {
    text += "The number is " + i;
    i++;
}
while (i < 5);



var degrees = 45;

document.getElementById("second").style.transform = "rotate(7deg)";

secondRotation(0); // returns 0
secondRotation(59); // returns (59 / 60) * 360

hourRotation(12); // returns 0
hourRotation(5); // returns (5 / 12) * 360

<p id="demo">Click on "Try it". I will display when two, four, and six seconds have passed.</p>

<script>
function timedText() {
    setTimeout(myTimeout1, 2000) 
    setTimeout(myTimeout2, 4000) 
    setTimeout(myTimeout3, 6000) 
}
function myTimeout1() {
    document.getElementById("demo").innerHTML = "2 seconds";
}
function myTimeout2() {
    document.getElementById("demo").innerHTML = "4 seconds";
}
function myTimeout3() {
    document.getElementById("demo").innerHTML = "6 seconds";
}
</script>

So, maybe if I did a nested loop that dropped things down on and interval iterating from seconds (60 of them) then have that variable reset to zero, but kick the minute variable up one. then once the minutes hit 60, the hour moves one.
*/