import ingresarDato from "./totalizador";

describe("Totalizador de Ventas", () => {
    it("Ingresar y mostrar Cantidad de items", () => {
        expect(ingresarDato(9)).toEqual(9);
    });
    it("Ingresar y mostrar Precio por item", () => {
        expect(ingresarDato(19)).toEqual(19);
    });
});
