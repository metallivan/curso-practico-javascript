const lista1 = [1,2,3,1,2,3,4,2,2,2,1];


const lista1Count = {};

lista1.map(
    el => lista1Count[el] ? lista1Count[el] += 1 : lista1Count[el] = 1
);

const lista1Array = Object.entries(lista1Count).sort(
    (valorAcumulado, nuevoValor) => valorAcumulado[1] - nuevoValor[1]
);

const moda = lista1Array[lista1Array.length - 1];