var xmlHttp;
var inputObj = {};
var xmlFile = "contributions.xml";
var contributions;

function createXMLHttpRequest() {
    if (window.ActiveXObject) {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    }
}

function startInsert(obj) {
    createXMLHttpRequest();
    inputObj = obj;
    xmlHttp.open("GET", xmlFile, true);
    xmlHttp.onreadystatechange = handleStateChange;
    xmlHttp.send(null);
}


function handleStateChange() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            var xmlDoc = xmlHttp.responseXML;
            var contribution = xmlDoc.createElement("contribution");
            contribution.setAttribute("id", inputObj.id);

            var name = xmlDoc.createElement("name");
            var nameValue = xmlDoc.createTextNode(inputObj.name);
            name.appendChild(nameValue);
            contribution.appendChild(name);

            var sex = xmlDoc.createElement("sex");
            var sexValue = xmlDoc.createTextNode(inputObj.sex);
            sex.appendChild(sexValue);
            contribution.appendChild(sex);

            var price = xmlDoc.createElement("price");
            var priceValue = xmlDoc.createTextNode(inputObj.price);
            price.appendChild(priceValue);
            contribution.appendChild(price);

            var date = xmlDoc.createElement("date");
            var dateValue = xmlDoc.createTextNode(inputObj.date);
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
            xmlDoc.writable;
            // xmlHttp
            // contributions.save(xmlFile)
            // xmlDoc.save(xmlFile);
            // xmlDoc.save()
            // xmlDoc.close();
            // xmlDoc.ex
        }
    }
}
