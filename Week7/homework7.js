var name = prompt ("What is your name?");
document.getElementById("xholder").innerHTML = name;

var birthday = prompt ("When is your Birthday?");
document.getElementById("mholder").innerHTML = birthday;


var color = prompt ("What is your favorite color?");
document.getElementById("wholder").innerHTML = color;


document.getElementById("wholder").style.color = color;
xholder.style.color = color; 
mholder.style.color = color;