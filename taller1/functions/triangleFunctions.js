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
    
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;    
console.log("El perímetro del triángulos es: " + perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) + "cm.");

const areaTriangulo = (base, altura) => (base * altura) / 2;
console.log("El área del triángulo es: " + areaTriangulo(baseTriangulo, alturaTriangulo) + "cm^2.");

const alturaTrianguloIsosceles = (lado1, lado2, base) => Math.sqrt( lado1 * lado2 - ( base**2 / 4) );

console.groupEnd();

// export default { perimetroTriangulo, areaTriangulo, alturaTrianguloIsosceles }