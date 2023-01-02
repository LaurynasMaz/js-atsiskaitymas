/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
class Car{
  constructor(props){
    this.props = props;
    this.outputContainer = document.querySelector('#output');
  }

  render(){
    this.container = document.createElement('div');
    this.container.classList.add('carCard');

    this.carModel = document.createElement('h2');
    this.carModel.classList.add('modelInfo');
    this.carModel.textContent = "Models";

    this.brand = document.createElement('h2');
    this.brand.classList.add('brand');
    this.brand.textContent = this.props.brand;

    //  Models
    this.modelsContainer = document.createElement('div');
    this.modelsContainer.classList.add("modelsContainer");
    this.props.allModels.forEach(model=>{
      this.model = document.createElement('p');
      this.model.textContent = model;
      this.modelsContainer.append(this.model);
    })

    this.container.append(this.brand, this.modelsContainer);
    this.outputContainer.append(this.container);
  }
}
fetch(ENDPOINT)
  .then(response => response.json())
  .then(data => {
    data.forEach(car => {
      console.log(car)
      const newCar = new Car({brand: car.brand, allModels: car.models});
      newCar.render();
    });
  });