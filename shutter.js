
function shutterDown () {
    document.getElementById("shutter").style.transform = "translateY(0vh)";
    setTimeout(shutterUp, 600)
}

function shutterUp () {
    document.getElementById("shutter").style.transform = "translateY(-100vh)";
    
}