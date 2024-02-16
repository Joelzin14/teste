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
}
