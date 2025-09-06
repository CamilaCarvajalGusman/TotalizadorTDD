import {ingresarDato, ingresarCodigoEst, calcularPrecioNeto} from "./totalizador";

describe("Totalizador de Ventas", () => {
    it("Ingresar y mostrar Cantidad de items", () => {
        expect(ingresarDato(9)).toEqual(9);
    });
    it("Ingresar y mostrar Precio por item", () => {
        expect(ingresarDato(19)).toEqual(19);
    });
    it("Ingresar y mostrar Código de estado", () => {
        expect(ingresarCodigoEst("CA")).toEqual("CA");
    });
    it("Mostrar el precio neto apretando el botón 'Totalizar'", () => {
        expect(calcularPrecioNeto(45,3)).toEqual(135);
    });
});
