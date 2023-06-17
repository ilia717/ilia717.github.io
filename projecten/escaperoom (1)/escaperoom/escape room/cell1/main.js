function blaadje(){
    document.getElementById("blaadje1").style.visibility = "visible";
    document.getElementById("bgcell1").style.filter = "blur(25px)";
    console.log("loaded");
}

function nietmeer(){
    document.getElementById("blaadje1").style.visibility = "hidden";
    document.getElementById("bgcell1").style.filter = "blur(0px)";
}