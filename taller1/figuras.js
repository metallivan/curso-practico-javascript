// import square from './functions/squareFunctions.js';
// import triangle from './functions/triangleFunctions.js';
// import circle from './functions/circleFunctions.js';

// const square = require('./functions/squareFunctions.js');
// const triangle = require('./functions/triangleFunctions.js');
// const circle = require('./functions/circleFunctions.js');

// const { perimetroCuadrado, areaCuadrado } = square;
// const { perimetroTriangulo, areaTriangulo, alturaTrianguloIsosceles } = triangle;
// const { diametroCirculo, perimetroCirculo, areaCirculo } = circle;

// Código del cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm.");

const perimetroCuadrado = (lado) => lado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado(ladoCuadrado) + "cm.");

const areaCuadrado = (lado) => lado * lado;
console.log("El área del cuadrado es: " + areaCuadrado(ladoCuadrado) + "cm^2.");

console.groupEnd();

// Código del triángulo

console.group("Triángulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 + " cm, " 
    + ladoTriangulo2 + " cm y "
    + baseTriangulo + " cm"
    );
    
console.log("La altura del triángulo es de: " + alturaTriangulo + " cm");
    
const perimetroTriangulo = (lado1, lado2, base) => parseInt(lado1) + parseInt(lado2) + parseInt(base);    
console.log("El perímetro del triángulos es: " + perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) + "cm.");

const areaTriangulo = (base, altura) => (base * altura) / 2;
console.log("El área del triángulo es: " + areaTriangulo(baseTriangulo, alturaTriangulo) + "cm^2.");

const alturaTrianguloIsosceles = (lado1, lado2, base) => parseInt(Math.sqrt( lado1 * lado2 - ( base**2 / 4) ));

console.groupEnd();

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

//Inputs

const input_cuadrado = document.getElementById("input-cuadrado");
const input_triangulo_l1 = document.getElementById("input-triangulo-l1");
const input_triangulo_l2 = document.getElementById("input-triangulo-l2");
const input_triangulo_base = document.getElementById("input-triangulo-base");
const input_triangulo_altura = document.getElementById("input-triangulo-altura");
const input_circulo = document.getElementById("input-circulo");

// Funciones Cuadrado

const calcularPerimetroCuadrado = () => {
    const value = parseInt(input_cuadrado.value);
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};
const calcularAreaCuadrado = () => {
    const value = input_cuadrado.value;
    const area = areaCuadrado(value);
    alert(area);
};

// Funciones Triángulo

const calcularPerimetroTriangulo = () => {
    const value_side_1 = input_triangulo_l1.value; 
    const value_side_2 = input_triangulo_l2.value;
    const value_base = input_triangulo_base.value;
    
    const perimetro = perimetroTriangulo(value_side_1, value_side_2, value_base);
    alert(perimetro);
}

const calcularAreaTriangulo = () => {
    
    const value_base = input_triangulo_base.value;
    const value_height = input_triangulo_altura.value;
    
    const area = areaTriangulo(value_base, value_height);
    alert(area);
    
}

const calcularTrianguloIsosceles = () => {
    
    const value_side_1 = parseInt(input_triangulo_l1.value); 
    const value_side_2 = parseInt(input_triangulo_l2.value);
    const value_base = parseInt(input_triangulo_base.value);
    const value_height = parseInt(input_triangulo_altura.value);
    
    if ( value_side_1 == value_side_2 ) {
        const alturaIsosceles = alturaTrianguloIsosceles(value_side_1, value_side_2, value_base);
        if ( alturaIsosceles == value_height ) {
            printResult("SI")
        } else {
            printResult("NO")
        }
    } else {
        printResult("NO")
    }

}

const printResult = (opt) => alert(`Las medidas del triángulo ${opt} reúnen las condiciones para ser un triángulo Isosceles`);


// Funciones Circulo

const calcularPerimetroCirculo = () => {
    const value = parseInt(input_circulo.value);
    const perimetro = perimetroCirculo(diametroCirculo(value));
    alert(perimetro);
};
const calcularAreaCirculo = () => {
    const value = input_circulo.value;
    const area = areaCirculo(value);
    alert(area);
};
