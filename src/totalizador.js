function ingresarDato(cantidad) {
    return cantidad;
}

function ingresarCodigoEst(codigo) {
    return codigo;
}
function calcularPrecioNeto(cantidad, precio) {
    return cantidad * precio;
}
function calcularImpuestoEstado(codigo){
    if(codigo === "CA"){
        return 8.25;
    }
}
export { ingresarDato, ingresarCodigoEst, calcularPrecioNeto, calcularImpuestoEstado };