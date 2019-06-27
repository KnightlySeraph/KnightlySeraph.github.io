var counter = 0

function addCreature() {
    // Get information
    name = document.getElementById("name").value
    hp = document.getElementById("hp").value
    ac = document.getElementById("ac").value

    //document.getElementById("cinfo1").innerHTML = name + ", Hit Points - " + hp + ", Armor Class - " + ac
    eTable = document.getElementById("encounterDisplay")
    newRow = eTable.insertRow(-1)
    for (i = 0; i < 3; i++) {
        newCell = newRow.insertCell(i)
        if (i == 0) {
            newText = document.createTextNode(name)
        } else if (i == 1) {
            newText = document.createTextNode(hp)
        } else {
            newText = document.createTextNode(ac)
        }
        newCell.appendChild(newText)
    }
    

}

function clearEncounter() {
    document.getElementById("encounterDisplay").innerHTML = ""
}