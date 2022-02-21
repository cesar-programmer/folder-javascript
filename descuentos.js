// const precioInicial = 120;
// const descuento = 18;
// const descuentoInicial = (descuento/100) * precioInicial;
// const precioFinal = precioInicial - descuentoInicial;
// console.log({
//     precioInicial,
//     descuento,
//     descuentoInicial,
//     precioFinal
// });
// podemos pasarle al consol log un objeto con los atributos y nos va a imprimir todo como si fueran atributos del objeto




function descuentostieneda(precioInicial,descuento){
    const precioFinal = precioInicial - ((descuento/100) * precioInicial);
    return precioFinal;
}

 function ButtonPriceDiscount(){
    const inputPrice = document.getElementById("Inputprice");
    const priceValue = parseFloat(inputPrice.value);

    const InputDiscount = document.getElementById("InputDiscount");
    const discountValue = parseFloat(InputDiscount.value);

    const precioConDescuento = descuentostieneda(priceValue, discountValue);

    const resultP =document.getElementById("ResultP")
    resultP.innerText = "El precio con el descuento es $" + precioConDescuento
    // lo que hago aqui es me triago el id de mi parrafo lo asigno a una viable y utilizo el innerText para inyectarle un string al parrafo
 }




/* (precio * (100 - descuento))/100 esto es la formula para calcular el descuento de un producto
funciona con cualquier numero */