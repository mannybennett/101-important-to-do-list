let thingI_Can_Control;
let thingI_Cant_Control;

function setValueOf_Can_Control(input) {
    thingI_Can_Control = input
    console.log({usersInput})
}
function createObjectIn_Can_ControlList() {
    let newObject = document.createElement("h3")
    let text = document.createTextNode(thingI_Can_Control)
    newObject.appendChild(text)
    document.getElementById("things-i-can-control").appendChild(newObject)
        
// We want to append the new object in a specific Section object instead of the Body object
// So we use the Document's method: "getElementById()" to select the section
// document.body.appendChild(newObject)  
}

function setValueOf_Cant_Control(input) {
    thingI_Cant_Control = input
    console.log({usersInput})
}


function createObjectIn_Cant_ControlList() {
    let newObject = document.createElement("h3")
    let text = document.createTextNode(thingI_Cant_Control)
    newObject.appendChild(text)
    document.getElementById("things-i-cant-control").appendChild(newObject)
}

function setValueOf_Must_Accept(input) {
    thingI_Must_Accept = input
    console.log({usersInput})
}

function createObjectIn_Must_AcceptList() {
    let newObject = document.createElement("h3")
    let text = document.createTextNode(thingI_Must_Accept)
    newObject.appendChild(text)
    document.getElementById("things-i-must-accept").appendChild(newObject)
}