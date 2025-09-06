function ingresarDato(cantidad) {
    return cantidad;
}

function ingresarCodigoEst(codigo) {
    return codigo;
}

function calcularImpuestoEstado(codigo) {
    if (codigo === "CA") {
        return 8.25;
    } else if (codigo === "TX") {
        return 6.25;
    } else if (codigo === "AL") {
        return 4;
    } else if (codigo === "NV") {
        return 8;
    } else if (codigo === "UT") {
        return 6.65;
    }else{
        return 0;
    }
}

function calcularPrecioNeto(cantidad, precio, codigo) {
    return (cantidad * precio) + parseFloat(calcularImpuestoEstado(codigo));
    
}
export { ingresarDato, ingresarCodigoEst, calcularPrecioNeto, calcularImpuestoEstado };