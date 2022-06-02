/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

let loadCard = (url) => {
  let card = document.getElementById("output");

  url.forEach((v) => {
    let div = document.createElement('div');
    div.id = 'div-output';

    let brand = document.createElement("h4");
    brand.innerText = `Brand: ${v.brand}`;

    let models = document.createElement("h4");
    models.innerText = `Models: ${v.models}`;

    div.append(brand, models);
    card.append(div);
  });
};

let dataFetch = async () => {
  try {
    let responce = await fetch(ENDPOINT);
    if (responce.ok) {
      let results = await responce.json();
      loadCard(results);
    }
  } catch (error) {
    console.error(error);
  }
};
dataFetch();
