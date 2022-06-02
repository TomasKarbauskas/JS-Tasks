/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
document.querySelector("#btn__element").addEventListener("click", () => {
  updateCount(++counter);
});

let counter = 0;
let updateCount = (value) => {
  document.getElementById("btn__state").innerText = value;
};