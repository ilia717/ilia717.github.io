let goedecode = document.getElementById("luikske")

function enter(){
if (goedecode.value == 7832){
    alert("je hebt het goed");
    window.open("../derde kamer/");    
} else {
    alert("Je hebt het fout");
}
}
function luik(){
    document.getElementById("luikcode").style.visibility = "visible";
    document.getElementById("gangetje").style.filter = "blur(25px)";
    document.getElementById("cellnummer1").style.filter= "blur(25px)";
    document.getElementById("cellnummer2").style.filter= "blur(25px)";
    document.getElementById("cellnummer3").style.filter= "blur(25px)";
    document.getElementById("terug").style.filter= "blur(25px)";
    console.log("loaded");
}

function nietmeer(){
    document.getElementById("luikcode").style.visibility = "hidden";
    document.getElementById("gangetje").style.filter = "blur(0px)";
    document.getElementById("cellnummer1").style.filter = "blur(0px)";
    document.getElementById("cellnummer2").style.filter = "blur(0px)";
    document.getElementById("cellnummer3").style.filter = "blur(0px)";
    document.getElementById("terug").style.filter = "blur(0px)";
}