//testing
var a, b, c;
a=1; //front banner 
b=2; //left banner 
c=3; // right banner 

function nextBanner(){

if(a==1){
    c=1;
    a=2;
    b=3;
    //let yellow behind
    document.getElementById("banner1").style.zIndex = 0;
    document.getElementById("banner3").style.zIndex = 0;
    document.getElementById("banner2").style.zIndex = -1;
    document.getElementById("banner1").style.left = "-100vw";
    document.getElementById("banner2").style.left = "-200vw";
    document.getElementById("banner3").style.left = "0vw";

    document.getElementById("banner_button").style.left="-100vw";
    return;
}

if(a==2){
    a=3;
    b=1;
    c=2;
    document.getElementById("banner2").style.zIndex = 0;
    document.getElementById("banner3").style.zIndex = 0;
    document.getElementById("banner1").style.zIndex = -1;
    document.getElementById("banner1").style.left = "-200vw";
    document.getElementById("banner2").style.left = "0vw";
    document.getElementById("banner3").style.left = "-100vw";
    document.getElementById("banner1").style.zIndex = 0;
    document.getElementById("banner_button").style.left="-200vw";
    return;
}

if(a==3){
    a=1;
    b=2;
    c=3;
    document.getElementById("banner1").style.zIndex = 0;
    document.getElementById("banner2").style.zIndex = 0;
    document.getElementById("banner3").style.zIndex = -1;
    document.getElementById("banner1").style.left = "0vw";
    document.getElementById("banner2").style.left = "-100vw";
    document.getElementById("banner3").style.left = "-200vw";
    document.getElementById("banner_button").style.left="0vw";
    return;
}
}

function leftBanner(){

if(a==1){
    a=3;
    b=1;
    c=2;
    document.getElementById("banner1").style.zIndex = 0;
    document.getElementById("banner2").style.zIndex = 0;
    document.getElementById("banner3").style.zIndex = -1;
    document.getElementById("banner1").style.left = "-200vw";
    document.getElementById("banner2").style.left = "0vw";
    document.getElementById("banner3").style.left = "-100vw";
    document.getElementById("banner_button").style.left="-200vw";
    return;
}

if(a==2){
    a=1;
    b=2;
    c=3;
    document.getElementById("banner1").style.zIndex = 0;
    document.getElementById("banner3").style.zIndex = 0;
    document.getElementById("banner2").style.zIndex = -1;
    document.getElementById("banner1").style.left = "0vw";
    document.getElementById("banner2").style.left = "-100vw";
    document.getElementById("banner3").style.left = "-200vw";
    document.getElementById("banner_button").style.left="0vw";
    return;
}

if(a==3){
    a=2;
    b=3;
    c=1;
    document.getElementById("banner2").style.zIndex = 0;
    document.getElementById("banner3").style.zIndex = 0;
    document.getElementById("banner1").style.zIndex = -1;
    document.getElementById("banner1").style.left = "-100vw";
    document.getElementById("banner2").style.left = "-200vw";
    document.getElementById("banner3").style.left = "0vw";
    document.getElementById("banner_button").style.left="-100vw";
    return;
}
}

function mouseOverSubMenu(whichMenu){
    document.getElementById(whichMenu).style.backgroundColor = "white";
    document.getElementById(whichMenu).style.opacity = "0.5";
    document.getElementById(whichMenu).style.color = "black";
    return;
}

function mouseOutSubMenu(whichMenu){
    document.getElementById(whichMenu).style.backgroundColor = "";
    document.getElementById(whichMenu).style.opacity = "";
    document.getElementById(whichMenu).style.color = "";
    return;
}

function dontOpenMenuBar(){
    console.log("ok");
    document.getElementById("menubar").style.height="6.4vh";
    console.log("ok2");
}

function reverseDontOpenMenuBar(){
    console.log("ok");
    document.getElementById("menubar").style.height="";
    console.log("ok2");
}
