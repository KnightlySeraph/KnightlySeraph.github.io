function rolld6() {
    result = 0
    result = Math.floor(Math.random() * ((7) - 1)) + 1
    return result
}

function rollStat() {
    lowest = 10;
    total = 0;
    for (i = 0; i < 4; i++) {
        die = rolld6()
        if (die < lowest) {
            lowest = die
        }
        total += die
    }

    sRoll = total - lowest
    strValue = sRoll.toString()
    return strValue
}

function stats() {
    result = ""
    list = []
    for (z = 0; z < 7; z++) {
        stat = rollStat()
        list.push(stat)
        result = result + stat + ", "
    }


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
