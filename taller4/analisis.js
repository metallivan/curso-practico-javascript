// Funciones Helpers

const esPar = (numerito) => numerito % 2 === 0;

const calcularMediaAritmetica = (lista) => {

    const sumaLista = lista.reduce( 
        (valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento
    );
    
    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
} 

// Fin Funciones Helpers

// Mediana General
const salariosCol = colombia.map( personita => personita.salary );

const salariosColSorted = salariosCol.sort( (salaryA, salaryB) =>  salaryA - salaryB );


const medianaSalariosCol = (lista) => {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        
        return mediana;

    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
};

const medianaGeneralCol = medianaSalariosCol(salariosColSorted);

// Mediana del Top 10%

const spliceStart = (salariosColSorted.length * 90) /100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalariosCol(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});