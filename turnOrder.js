var counter = 0

function addCreature() {
    // Get information
    name = document.getElementById("name").value
    ini = document.getElementById("ini").value
    hp = document.getElementById("hp").value
    ac = document.getElementById("ac").value

    inputBox = document.createElement("input")
    inputBox.setAttribute("type", "text")
    inputBox.setAttribute("onkeydown", "doOperation(this)")


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
        if (i != 2) {
            newCell.appendChild(newText)
        } else {
            inputBox.setAttribute("value", hp)
            newCell.appendChild(inputBox)

        }
        
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

function enterCre() {
    if (event.key === "Enter") {
        addCreature()
    }
}

function doOperation(domObj) {
    if (event.key === "Enter") {
        input = domObj.value

        iLength = input.length
        currentIndex = 0;

        cnum1 = "";
        cnum2 = "";

        operation = "none"

        // Loop through, collect first number
        for (i = 0; i < iLength; i++) {
           if (input[i] === "-") {
               // Subtraction Operation Detected
               operation = 0
               currentIndex = i + 1
               break
           } else if (input[i] === "+") {
                // Addition Opeation Detected
                operation = 1
                currentIndex = i + 1
                break
           } else if (input[i] === "/") {
                // Division Operation Detected
                operation = 2
                currentIndex = i + 1
                break
           } else if (input[i] === "*") {
                // Multiplication operation detected
                operation = 3
                currentIndex = i + 1
                break
           }
           cnum1 = cnum1 + input[i]
        }

        // Loop through collect second number
        for (z = currentIndex; z < iLength; z++ ) {
            cnum2 = cnum2 + input[z]
        }

        if (operation == 0) {
            // Perform subtraction
            num1 = parseInt(cnum1)
            num2 = parseInt(cnum2)
            final = num1 - num2
            domObj.value = final
        } else if (operation == 1) {
            num1 = parseInt(cnum1)
            num2 = parseInt(cnum2)
            final = num1 + num2
            domObj.value = final
        } else if (operation == 2) {
            num1 = parseInt(cnum1)
            num2 = parseInt(cnum2)
            final = num1 / num2
            domObj.value = final
        } else if (operation == 3) {
            num1 = parseInt(cnum1)
            num2 = parseInt(cnum2)
            final = num1 * num2
            domObj.value = final
        }
    }
}

// This if for the calculator feature
function appendOutputCell(domObj) {
    // This will take input and write it to the display
    outputField = document.getElementById("calcOutput")
    input = domObj.innerHTML


    currentInfo = outputField.value

    currentInfo = currentInfo + input
    
    // Set the output field
    document.getElementById("calcOutput").value = currentInfo
}

function clearCalcOutput () {
    document.getElementById("calcOutput").value = ""
}

// Primarily a copy of doOperation but tailored more for the calculator function
function doCalculatorOperation() {
    input = document.getElementById("calcOutput").value

    iLength = input.length
    currentIndex = 0;
    console.log(input)

    cnum1 = "";
    cnum2 = "";

    operation = "none"

    // Loop through, collect first number
    for (i = 0; i < iLength; i++) {
        if (input[i] === "-") {
            // Subtraction Operation Detected
            operation = 0
            currentIndex = i + 1
            break
        } else if (input[i] === "+") {
            // Addition Opeation Detected
            operation = 1
            currentIndex = i + 1
            break
        } else if (input[i] === "/") {
            // Division Operation Detected
            operation = 2
            currentIndex = i + 1
            break
        } else if (input[i] === "*") {
            // Multiplication operation detected
            operation = 3
            currentIndex = i + 1
            break
        }
        cnum1 = cnum1 + input[i]
    }

    // Loop through collect second number
    for (z = currentIndex; z < iLength; z++ ) {
        cnum2 = cnum2 + input[z]
    }

    if (operation == 0) {
        // Perform subtraction
        num1 = parseInt(cnum1)
        num2 = parseInt(cnum2)
        final = num1 - num2
        document.getElementById("calcOutput").value = final
    } else if (operation == 1) {
        num1 = parseInt(cnum1)
        num2 = parseInt(cnum2)
        final = num1 + num2
        document.getElementById("calcOutput").value = final
    } else if (operation == 2) {
        num1 = parseInt(cnum1)
        num2 = parseInt(cnum2)
        final = num1 / num2
        document.getElementById("calcOutput").value = final
    } else if (operation == 3) {
        num1 = parseInt(cnum1)
        num2 = parseInt(cnum2)
        final = num1 * num2
        document.getElementById("calcOutput").value = final
    } else {
        alert("Incorrect Operation")
    }
}