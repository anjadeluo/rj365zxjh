var xmlHttp;
var requestType = "";
var xmlFile = "contributions.xml";

function createXMLHttpRequest() {
    if (window.ActiveXObject) {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    }
}

function startRequest(requestedList) {
    requestType = requestedList;
    createXMLHttpRequest();
    xmlHttp.open("GET", xmlFile, true);
    xmlHttp.onreadystatechange = handleStateChange;

    xmlHttp.send(null);
}


function handleStateChange() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            if (requestType == "north") {
                listNorthStates();
            }
            else if (requestType == "South") {
                listSouthStates();
            }
            else if (requestType == "all") {
                listNorthStates();
            }
        }
    }
}


function listNorthStates() {
    var xmlDoc = xmlHttp.responseXML;
    var northNode = xmlDoc.getElementsByTagName("north")[0];
    var out = "Northern States";
    var northStates = northNode.getElementsByTagName("state");
    outputList("Northern States", northStates);
}


function listSouthStates() {
    var xmlDoc = xmlHttp.responseXML;
    var SouthNode = xmlDoc.getElementsByTagName("South")[0];
    var SouthStates = SouthNode.getElementsByTagName("state");

    for (var i = 0; i < SouthStates.length; i++) {
        var SouthState = SouthStates[i];

        var CityNode = SouthState.getElementsByTagName("City")[0];

        var PopulationNode = SouthState.getElementsByTagName("Pupulation")[0];

        alert(CityNode.childNodes[0].nodeValue);
        alert(PopulationNode.childNodes[0].nodeValue);

    }
}


function outputList(title, states) {
    var out = title;
    var currentState = null;
    for (var i = 0; i < states.length; i++) {
        currentState = states[i];
        out = out + "\n-" + currentState.childNodes[0].nodeValue;
    }

    console.info(out);
}

insertData = function (obj) {
    var xmlDoc = xmlHttp.responseXML;
    var contribution = xmlDoc.createElement("contribution");
    contribution.setAttribute("id", obj.id);

    var name = xmlDoc.createElement("name");
    var nameValue = xmlDoc.createTextNode(obj.name);
    name.appendChild(nameValue);
    contribution.appendChild(name);

    var sex = xmlDoc.createElement("sex");
    var sexValue = xmlDoc.createTextNode(obj.sex);
    sex.appendChild(sexValue);
    contribution.appendChild(sex);

    var price = xmlDoc.createElement("price");
    var priceValue = xmlDoc.createTextNode(obj.price);
    price.appendChild(priceValue);
    contribution.appendChild(price);

    var date = xmlDoc.createElement("date");
    var dateValue = xmlDoc.createTextNode(obj.date);
    date.appendChild(dateValue);
    contribution.appendChild(date);

    if (xmlDoc.documentElement == null) {
        contributions = xmlDoc.createElement("contributions");
        contributions.appendChild(contribution);
        xmlDoc.appendChild(contributions);
    } else {
        contributions = xmlDoc.documentElement;
        contributions.appendChild(contribution);
    }
    xmlDoc.save("contributions.xml");
}