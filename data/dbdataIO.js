// var insert = ClassModel.create();
// var xmlDoc = new ActiveXObject("Msxml2.DOMDocument.3.0");
var contributions;
var xmlDoc;
var aXMLFileName = "data/contributions.xml";
try {
    if (window.ActiveXObject) {
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = false;
        isLoaded = xmlDoc.load(aXMLFileName);
    }
    else if (document.implementation && document.implementation.createDocument) {
        try {
            xmlDoc = document.implementation.createDocument('', '', null);
            xmlDoc.async = false;
            xmlDoc.load(aXMLFileName);
        } catch (e) {
            var xmlhttp = new window.XMLHttpRequest();
            xmlhttp.open("GET", aXMLFileName, false);
            xmlhttp.send(null);
            xmlDoc = xmlhttp.responseXML;
        }
    } else {
        alert("load data error");
    }
} catch (e) {
    alert(e.message);
}
/*
insert.prototype =
    {
        construct: function (config) {
            this.id = config.id;
            this.name = config.name;
            this.sex = config.sex;
            this.price = config.price;
            this.date = config.date;
            this.insertData();
        }, insertData: function () {
            var contribution = xmlDoc.createElement("contribution");
            contribution.setAttribute("id", this.id);

            var name = xmlDoc.createElement("name");
            var nameValue = xmlDoc.createTextNode(this.name);
            name.appendChild(nameValue);
            contribution.appendChild(name);

            var sex = xmlDoc.createElement("sex");
            var sexValue = xmlDoc.createTextNode(this.sex);
            sex.appendChild(sexValue);
            contribution.appendChild(sex);

            var price = xmlDoc.createElement("price");
            var priceValue = xmlDoc.createTextNode(this.price);
            price.appendChild(priceValue);
            contribution.appendChild(price);

            var date = xmlDoc.createElement("date");
            var dateValue = xmlDoc.createTextNode(this.date);
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
    }
*/

insertData = function (obj) {
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