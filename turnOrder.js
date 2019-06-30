var counter = 0

function addCreature() {
    // Get information
    name = document.getElementById("name").value
    ini = document.getElementById("ini").value
    hp = document.getElementById("hp").value
    ac = document.getElementById("ac").value

    //document.getElementById("cinfo1").innerHTML = name + ", Hit Points - " + hp + ", Armor Class - " + ac
    eTable = document.getElementById("encounterDisplay")
    newRow = eTable.insertRow(-1)
    for (i = 0; i < 4; i++) {
        newCell = newRow.insertCell(i)
        if (i == 0) {
            newText = document.createTextNode(name)
        } else if (i == 1) {
            newText = document.createTextNode(ini)
        } else if (i == 2) {
            newText = document.createTextNode(hp)
        } else {
            newText = document.createTextNode(ac)
        }
        newCell.appendChild(newText)
    }

    // Run a sort after every added creature
    sort()
    

}

function sort() {
    eTable = document.getElementById("encounterDisplay")
    var i, x, y, rows, switching, shouldSwitch
    switching = true

    while (switching) {
        switching = false
        rows = eTable.rows

        for (i = 0; i < rows.length-1; i++) {
            shouldSwitch = false

            x = rows[i].getElementsByTagName("TD")[1]
            y = rows[i+1].getElementsByTagName("TD")[1]

            if (Number(x.innerHTML) < Number(y.innerHTML)) {
                shouldSwitch = true
                break
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i+1], rows[i])
            switching = true
        }
    }
    

}

function clearEncounter() {
    document.getElementById("encounterDisplay").innerHTML = ""
}