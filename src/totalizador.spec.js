import { ingresarDato, ingresarCodigoEst, calcularPrecioNeto, calcularImpuestoEstado, calcularDescuento } from "./totalizador";

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
        expect(calcularPrecioNeto(45, 3, "CA")).toEqual(146.1375);
    });
    it("Mostrar el impuesto para CA y el total para este estado 8.25%", () => {
        expect(calcularImpuestoEstado("CA")).toEqual(8.25);
    });
    it("Mostrar el impuesto para TX y el total para este estado 6.25%", () => {
        expect(calcularImpuestoEstado("TX")).toEqual(6.25);
    });
    it("Mostrar el impuesto para AL y el total para este estado 4%", () => {
        expect(calcularImpuestoEstado("AL")).toEqual(4);
    });
    it("Mostrar el impuesto para NV y el total para este estado 8%", () => {
        expect(calcularImpuestoEstado("NV")).toEqual(8);
    });
    it("Mostrar el impuesto para UT y el total para este estado 6.65%", () => {
        expect(calcularImpuestoEstado("UT")).toEqual(6.65);
    });
    it("Mostrar el descuento si el precio > 1000 => 3%", () => {
        expect(calcularDescuento(1001)).toEqual(0.03);
    });
    it("Mostrar el descuento si el precio > 3000 => 5%", () => {
        expect(calcularDescuento(3001)).toEqual(0.05);
    });
    it("Mostrar el descuento si el precio > 7000 => 7%", () => {
        expect(calcularDescuento(7901)).toEqual(0.07);
    });
    it("Mostrar el descuento si el precio > 10000 => 10%", () => {
        expect(calcularDescuento(17901)).toEqual(0.10);
    });
    it("Mostrar el descuento si el precio > 30000 => 15%", () => {
        expect(calcularDescuento(47901)).toEqual(0.15);
    });
});
