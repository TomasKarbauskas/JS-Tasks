/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.querySelector("form").addEventListener("submit", formFn);
function formFn(event) {
  event.preventDefault();

  let innput = document.getElementById("search").value;
  let output = document.getElementById("output");

  let valueInPounds = (v) => {
    return v * 2.2046;
  };

  let valueInGrams = (v) => {
    return v / 0.001;
  };

  let valueInOz = (v) => {
    return v * 35.274;
  };

  let pounds = valueInPounds(innput);
  let grams = valueInGrams(innput);
  let oz = valueInOz(innput);

  output.innerText = `${pounds}lb,  ${grams}g,  ${oz}oz`;
};
