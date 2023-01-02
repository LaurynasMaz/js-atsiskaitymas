/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  const kg = document.querySelector('#search').value;
  const lb = kg * 2.2046;
  const g = kg / 0.0010000;
  const oz = kg * 35.274;

  const output = document.querySelector('#output');
  output.innerHTML = `
      <h1>${kg} kg yra ${lb} lbs</h1>
      <h1>${kg} kg yra ${g} g</h1>
      <h1>${kg} kg ${oz} oz</h1>
  `;
});