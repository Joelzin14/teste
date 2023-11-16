<?php
<p id="demo">
</p>
<textarea id="retorno" rows="10" cols="50" style="width:49%;"></textarea>

  <textarea readonly id="teste" rows="10" cols="50" style="width:49%;"></textarea>
  
  <script>
      let clienteTexto = '{"clientId": 1,"cadastro": "2016-12-14","nome": "Angelo","idade": 86,"cidade": "São Paulo","estado": "SP","pets": [{"animal": "cachorro","nome": "Fido"},{"animal": "gato","nome": "Felix"},{"animal": "hamster","nome": "luzinha"}]}'

let cliente = JSON.parse(clienteTexto);


fetch("https://siteaprendizado.000webhostapp.com/gerenciador-arquivos/Site1.json")

   .then((x) => x.json(), /*alert("Consulta realizada!")*/)
    .then((y) => {      
            const nomejson = JSON.stringify(y, null, 4);
            const obj = JSON.parse(nomejson);  
  
            retorno.value = nomejson;   
    })
 
  .catch((error) => {
     const teste = document.getElementById("teste");
     teste.value = error;
?>
    });

  
  </script>
