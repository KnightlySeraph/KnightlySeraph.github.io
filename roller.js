
function roll(min, max) {
    
    
    
    r = 0
    // Sum up numbers
    if (max == 4) {
        loops = document.getElementById("amtd4").value
    } else if (max == 6) {
        loops = document.getElementById("amtd6").value
    } else if (max == 8) {
        loops = document.getElementById("amtd8").value
    } else if (max == 10) {
        loops = document.getElementById("amtd10").value
    } else if (max == 12) {
        loops = document.getElementById("amtd12").value
    } else if (max == 20) {
        loops = document.getElementById("amtd20").value
    } else if (max == 100) {
        loops = document.getElementById("amtd100").value
    }
    for (i = 0; i < loops; i++) {
        die = Math.floor(Math.random() * ((max + 1) - min)) + min
        console.log(die)
        r += die
    }

    if (max == 4) {
        document.getElementById("resultd4").value = r;
    } else if (max == 6) {
        document.getElementById("resultd6").value = r;
    } else if (max == 8) {
        document.getElementById("resultd8").value = r;
    } else if (max == 10) {
        document.getElementById("resultd10").value = r;
    } else if (max == 12) {
        document.getElementById("resultd12").value = r;
    } else if (max == 20) {
        document.getElementById("resultd20").value = r;
    } else if (max == 100) {
        document.getElementById("resultd100").value = r;
    }
    
}

