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
    } else {
        return 0;
    }
}

function calcularDescuento(precio) {
    if (precio > 7000) {
        return 0.07;
    }else if (precio > 3000) {
        return 0.05;
    }else if (precio > 1000) {
        return 0.03;
    }else{
        return 0;
    }
}

function calcularPrecioNeto(cantidad, precio, codigo) {
    let porcentaje = parseFloat(calcularImpuestoEstado(codigo)) / 100;
    return (cantidad * precio) + ((cantidad * precio) * porcentaje);

}
export { ingresarDato, ingresarCodigoEst, calcularPrecioNeto, calcularImpuestoEstado, calcularDescuento };