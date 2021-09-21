// Código del cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm.");

const perimetroCuadrado = (lado) => lado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado(ladoCuadrado) + "cm.");

const areaCuadrado = (lado) => lado * lado;
console.log("El área del cuadrado es: " + areaCuadrado(ladoCuadrado) + "cm^2.");

console.groupEnd();

// export default { perimetroCuadrado, areaCuadrado }
