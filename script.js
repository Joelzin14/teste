
const menu = document.getElementsByClassName("ODXihb Hk4XGb")[0];
// input do button action
// <li> <input type="button" value="Click here" class="wR3cXd"></li>
//class="wR3cXd atHn2d"
var liAction = document.createElement("li");
var buttonAction = document.createElement("input");
buttonAction.setAttribute("type","button");
buttonAction.setAttribute("class","wR3cXd atHn2d");
buttonAction.setAttribute("value","Click Here")
buttonAction.setAttribute("id","btn1")
buttonAction.setAttribute("onclick","joel()")
liAction.appendChild(buttonAction);
menu.appendChild(liAction)

// id btn
const buttonEXT = document.getElementById("btn1");


function pegaDados() {
 //const inputName = document.getElementById("nome");
//const inputTel = document.getElementById("tel");
//const inputEnd = document.getElementById("end");
  //nome
const Nome = document.getElementsByClassName("DUwDvf lfPIob")[0]; // h1
var nomeReal= Nome.textContent;
//inputName.value = nomeReal

//Telefone
const Tel = document.getElementsByClassName("Io6YTe fontBodyMedium kR99db")[0];
var telReal= Tel.textContent;
//inputTel.value = telReal

//Endereço
const Ender = document.getElementsByClassName("Io6YTe fontBodyMedium kR99db")[1];
var endReal= Ender.textContent;
//inputEnd.value = endReal
//const Endereço = //div;
alert(nomeReal +telReal +endReal)
