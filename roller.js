
function roll(min, max) {
    num = Math.random()
    
    
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
    }
    for (i = 0; i < loops; i++) {
        die = Math.floor(num * ((max + 1) - min)) + min
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
    }
    
}

