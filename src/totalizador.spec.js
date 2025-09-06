import ingresarCantItems from "./totalizador";

describe("Totalizador de Ventas", () => {
    it("Ingresar y mostrar Cantidad de items", () => {
        expect(ingresarCantItems(9)).toEqual(9);
    });
});
