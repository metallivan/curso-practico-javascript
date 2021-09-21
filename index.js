const items = [
    {
        "name": "Taller #01: Cálculo de Figuras Geométricas",
        "link": "./taller1/figuras.html"
    },
    {
        "name": "Taller #02: Cálculo de Descuentos",
        "link": "./taller2/descuentos.html"
    },
    {
        "name": "Taller #03-A: Cálculo de Promedios",
        "link": "./taller3a/promedio.html"
    },
    {
        "name": "Taller #03-B: Cálculo de Mediana",
        "link": "./taller3b/mediana.html"
    },
    {
        "name": "Taller #03-C: Cálculo de Moda",
        "link": "./taller3c/moda.html"
    },
    {
        "name": "Taller #04: Cálculo de Salarios",
        "link": "./taller4/salarios.html"
    },
];

const itemList = document.getElementById("item-list");

items.map( item => itemList.innerHTML += `<li><a href=${item.link}>${item.name}</a></li>`);
