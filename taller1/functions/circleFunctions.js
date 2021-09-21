// Código del círculo

console.group("Círculos");

// Radio

const radioCirculo = 4;

// Diámetro

const diametroCirculo = (radio) => radio * 2;

// PI

// const PI = 3.1415;

const PI = Math.PI;

// Circunferencia

const perimetroCirculo = (diametro) => diametroCirculo(diametro) * PI;

// Área

const areaCirculo = (radio) => (radio ** 2) * PI;

console.log("El radio del círculo es: " + radioCirculo + " cm");
console.log("El diámetro del círculo es: " + diametroCirculo(radioCirculo) + " cm");
console.log("PI es: " + PI);
console.log("El perímetro del círculo es: " + perimetroCirculo(diametroCirculo(radioCirculo)) + " cm");
console.log("El área del círculo es: " + areaCirculo(radioCirculo) + " cm^2");

console.groupEnd();

// export default { diametroCirculo, perimetroCirculo, areaCirculo };