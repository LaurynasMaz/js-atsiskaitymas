/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
  
  sum(number1, number2) {
    return number1 + number2;
  }

  subtraction(number1, number2) {
    return number1 - number2;
  }

  multiplication(number1, number2) {
    return number1 * number2;
  }

  division(number1, number2) {
    return number1 / number2;
  }
}
console.log(new Calculator().sum(5,5)) 
console.log(new Calculator().subtraction(4,9)) 
console.log(new Calculator().multiplication(6,5)) 
console.log(new Calculator().division(3,3)) 
