function calcularValorFinal() {
    const producto = document.getElementById("producto").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);
    let valorInicial = 0;


    if (producto === "Camisas") {
        valorInicial = 100;
    } else if (producto === "Pantalones") {
        valorInicial = 150;
    }
    const impuestos = 0.21; // IVA
    const descuento = 0.2; // 20% de descuento
    const precioBruto = valorInicial * cantidad;
    const montoDescuento = precioBruto * descuento;
    const totalDescuento = precioBruto - montoDescuento;
    const totalImpuesto = totalDescuento * (1 + impuestos);


    document.getElementById("precioBruto").textContent = `$${precioBruto}`;
    document.getElementById("montoDescuento").textContent = `$${montoDescuento}`;
    document.getElementById("totalDescuento").textContent = `$${totalDescuento}`;
    document.getElementById("totalImpuesto").textContent = `$${totalImpuesto}`;
}
