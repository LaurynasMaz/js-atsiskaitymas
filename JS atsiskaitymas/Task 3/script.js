/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.getElementById('btn').addEventListener('click', () => {
  document.getElementById('output').innerHTML = '';

  fetch(ENDPOINT)
    .then(response => response.json())
    .then(users => {
      users.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <img src="${user.avatar_url}">
          <h2>${user.login}</h2>
        `;

        document.getElementById('output').appendChild(card);
      });
    });
});