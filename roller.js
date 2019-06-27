
function roll(min, max) {
    num = Math.random()
    
    console.log(num)
    result = 0
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
        result += die
    }

    if (max == 4) {
        document.getElementById("resultd4").value = result;
    } else if (max == 6) {
        document.getElementById("resultd6").value = result;
    } else if (max == 8) {
        document.getElementById("resultd4").value = result;
    } else if (max == 10) {
        document.getElementById("resultd4").value = result;
    } else if (max == 12) {
        document.getElementById("resultd4").value = result;
    }
   
}

function rolld4() {
    result = 0
    result = Math.floor(Math.random() * ((7) - 1)) + 1
    return result
}

function rollStat() {
    lowest = 10;
    total = 0;
    for (i = 0; i < 4; i++) {
        die = rolld4()
        if (die < lowest) {
            lowest = die
        }
        total += die
    }

    roll = total - lowest
    strValue = roll.toString()
    return strValue
}

function stats() {
    result = ""
    list = []
    for (z = 0; z < 7; z++) {
        stat = rollStat()
        console.log(stat)
        list.push(stat)
        result = result + stat + ", "
    }

    console.log(list)

    console.log(result)

    test1 = "Hello "
    test2 = "World"
    test3 = test1 + test2
    
    document.getElementById("statResult").value = list
}

function statInfo() {
    document.getElementById("statInfo").innerHTML = "This stat roller uses 4d6 drop lowest and rolls 7 stats"
}

function statLeave() {
    document.getElementById("statInfo").innerHTML = ""
}
