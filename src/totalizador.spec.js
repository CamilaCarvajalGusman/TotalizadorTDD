import ingresarDato from "./totalizador";

describe("Totalizador de Ventas", () => {
    it("Ingresar y mostrar Cantidad de items", () => {
        expect(ingresarDato(9)).toEqual(9);
    });
});
