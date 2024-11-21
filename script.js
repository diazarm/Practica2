var producto = prompt(`Ingrese el nombre del producto`);
var precio = Number(prompt(`Ingrese el precio`));
var cantidad = Number(prompt(`Ingrese la cantidad`));
var subtotal = precio * cantidad;
alert(`el subtotal de ${producto} es ${subtotal}`);

if (cantidad >= 10 && cantidad <20) {
  var dto10 = subtotal * 0.1;
  var precioFinal = Number(subtotal - dto10);
  alert(
    `obtendra un descuento del 10% por lo tanto abonara $${precioFinal} por las ${cantidad} ${producto}s`
  );
} else if (cantidad >= 20 && cantidad <50) {
  var dto20 = subtotal * 0.2;
  var precioFinal = Number(subtotal - dto20);
  alert(
    `obtendra un descuento del 20% por lo tanto abonara $${precioFinal} por las ${cantidad} ${producto}s`
  );
} else if (cantidad >= 50) {
  var dto30 = Number(subtotal * 0.3);
  var precioFinal = Number(subtotal - dto30);
  alert(
      `obtendra un descuento del 30% por lo tanto abonara $${precioFinal} por las ${cantidad} ${producto}s`
    );
} else if (cantidad < 2) {
    alert(
        `No se aplicaran descuentos ud. debera abonar $${subtotal} por la ${producto}`
    );
} else {
    alert(
        `No se aplicaran descuentos ud. debera abonar $${subtotal} por las ${cantidad} ${producto}s`
    );
}

do {
    var abonar = Number(prompt(`Ingrese el monto a pagar`));
  
    if (abonar < precioFinal) {
      alert(`El valor es insuficiente, por favor ingrese otro monto.`);
    }
  } while (abonar < precioFinal); //Mientras que se cumpla esa condicion hace el bucle de arriba.
  console.log(abonar)
  console.log(precioFinal)
  if (abonar == precioFinal) {
    alert(`Gracias por su compra.`);
  } else {
    let vuelto = Number(abonar - precioFinal)
    alert(`Su vuelto es de $${vuelto}.`);
  }
  
