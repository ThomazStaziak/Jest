// Default code
function pecasDeCarro(carro) {
  let pecas = [];

  return pecas;
}

// Test code
describe("Exercício 7", function() {
  it("Peças de carro", function() {
    var carro = {
      cor: "Verde",
      marca: "Renault",
      modelo: "Sandero"
    };

    var partes = pecasDeCarro(carro);

    assert(
      Array.isArray(partes),
      "A função pecasDeCarro deve retornar um array"
    );

    assert(partes.length === 3, "O array de retorno deve ter 3 elementos");

    assert(
      partes.shift() == "Verde" &&
        partes.shift() == "Renault" &&
        partes.shift() == "Sandero",
      "O array de retorno não tem as peças corretas"
    );
  });
});
