const calcularMediaAritmetica = (lista) => {

    const sumaLista = lista.reduce( 
        (valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento
    );
    
    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
} 

const lista1 = [100, 200, 500, 400000000];

const mitadLista1 = parseInt(lista1.length / 2);

const esPar = (num) => {
    if(num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if( esPar(lista1.length) ) {
    const el1 = lista1[mitadLista1 - 1];
    const el2 = lista1[mitadLista1];

    const promedioElementos = calcularMediaAritmetica([el1, el2]);

    mediana = promedioElementos;
    
} else {
    mediana = lista1[mitadLista1];
}