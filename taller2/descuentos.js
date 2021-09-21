// const precioOriginal = 100;
// const descuento = 18;


const calcularPrecioConDescuento = (precio, descuento) => {
    
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioPorDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioPorDescuento;
};

const onClickButtonPriceDiscount = () => {
    const inputPrice = document.getElementById("input-price");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("input-discount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    
    showResultPrice(precioConDescuento); 

}

const showResultPrice = (result) => {
    const resultPrice = document.getElementById("result-price");
    resultPrice.innerText = `El precio con descuento es de $${result}`;
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioPorDescuento
// });

// console.log(calcularPrecioConDescuento(300, 30));