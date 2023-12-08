//alert("Wait! Look at About Me first!");

document.getElementById("myButton").onclick = function(){
    document.getElementById("myText").innerHTML = 
    "Wow! I just manipulated the DOM by writing some Javascript. Pretty impressive...";
    document.getElementById("myButton").style.display = "none";
}