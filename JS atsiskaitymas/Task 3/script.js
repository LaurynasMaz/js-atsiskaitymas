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
const button = document.querySelector('#btn');
button.addEventListener('click', async () => {
  const response = await fetch(ENDPOINT);
  const users = await response.json();

  const output = document.querySelector('#output');
  output.innerHTML = '';

  for (const user of users) {
    const login = user.login;
    const avatarUrl = user.avatar_url;

    const card = document.createElement('div');
    card.classList.add('user-card');

    card.innerHTML = `
      <div class="user-login">${login}</div>
      <img class="user-avatar" src="${avatarUrl}" alt="${login}'s avatar">
    `;

    output.appendChild(card);
  }
});