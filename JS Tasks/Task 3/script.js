/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

document.querySelector("button").addEventListener("click", showContent);

function showContent() {
  let textClear = document.querySelector("p");
  textClear.innerText = "";

  let addToDiv = (url) => {
    let result = document.getElementById("output");

    url.forEach((v) => {
      let card = document.createElement("div");

      let login = document.createElement("h4");
      login.innerText = v.login;
      login.style.paddingTop = "1rem";

      let avatar = document.createElement("a");
      avatar.innerText = v.avatar_url;
      avatar.href = v.avatar_url;

      card.append(login, avatar);
      result.append(card);
    });
  };

  let getData = async () => {
    try {
      let responce = await fetch(ENDPOINT);
      if (responce.ok) {
        let results = await responce.json();
        addToDiv(results);
      }
    } catch (error) {
      console.error(error);
    }
  };
  getData();
}
