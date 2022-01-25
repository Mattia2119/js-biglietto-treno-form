//Mi salvo il riferimento al button invia"
let send = document.getElementById("send");

//Acquisisco i valori dal form//
send.addEventListener("click",
   function () {
      let name = document.getElementById("name").value;
      const age = document.getElementById("age").value;
      const km = document.getElementById("km").value;
      
      //Calcolo tariffa//
      const prezzoKm = 0.21;
      let price = km * prezzoKm;
      let offerta = "Prezzo pieno"

      //Condizioni applicazione scontistica//
      if (age == "minorenne") {
         price = price - (price / 100 * 20);
         offerta = "Ridotto minori"

   }  else if (age == "Over65") {
         price = price - (price / 100 * 40);
         offerta = "Ridotto pensionati"

   }  else if (age == "maggiorenne") {
         price = price;
         offerta = "Prezzo pieno"
   } 

   
   //Mostro il biglietto//
   let biglietto = document.getElementById("biglietto");
   biglietto.classList.remove("hidden");

   //Invio i valori al biglietto//
   document.getElementById("nome").innerHTML = name;
   document.getElementById("offerta").innerHTML = offerta;
   document.getElementById("prezzo").innerHTML = price.toFixed(2) + "&euro;";
   //Riporto il numero della carrozza//
   const numeroCarrozza = Math.floor(Math.random()*9) +1;
   document.getElementById("carrozza").innerHTML = numeroCarrozza;
   //Riporto il CP//
   const cP = Math.floor (Math.random()* 10000) + 90000;
   document.getElementById("cp").innerHTML = cP;
   }

);

//Mi salvo il riferimento per il button annulla//

let annulla = document.getElementById("reset");

annulla.addEventListener("click",
  function () {
     let biglietto = document.getElementById("biglietto");
     biglietto.classList.add("hidden");7

     document.getElementById("name").value= "";
     document.getElementById("km").value="";
     document.getElementById("age").value="minorenne";
  }
)









 