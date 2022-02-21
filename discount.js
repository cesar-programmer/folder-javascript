const cupons = [{ name: "descuento15", discount: 15},
{ name: "descuento25", discount: 25},
{ name: "descuento50", discount: 50},
{ name: "descuento75", discount: 75}
]


function descuentostieneda(precioInicial,descuento){
    const precioFinal = precioInicial - ((descuento/100) * precioInicial);
    return precioFinal;
}

 function ButtonPriceDiscount(){
    const inputPrice = document.getElementById("Inputprice");
    const priceValue = parseFloat(inputPrice.value);

    const InputDiscount = document.getElementById("InputDiscountCupon");
    const discountValue = (InputDiscount.value).toLowerCase();

   const ecunetraCupon = cupons.find(function(cupon) {
    return cupon.name === discountValue;
   })

   if(ecunetraCupon === undefined ){
       alert("tu cupon no es valido ")
   }
   else{
    const precioConDescuento = descuentostieneda(priceValue, ecunetraCupon.discount);

    const resultP =document.getElementById("ResultP")
    resultP.innerText = "El precio con el descuento es $" + precioConDescuento
   }

    // lo que hago aqui es me triago el id de mi parrafo lo asigno a una viable y utilizo el innerText para inyectarle un string al parrafo
 }
