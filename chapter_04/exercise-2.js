describe("Exercício 2", function() {
  it("Carro 1", function() {
    var meuCarro = {
      marca: "Renault",
      modelo: "Sandero",
      cor: "Preto"
    };

    meuCarro = mudarCor(JSON.stringify(meuCarro), "Vermelho");

    assert(typeof meuCarro === "string", "A função deve retornar uma string");

    try {
      meuCarro = JSON.parse(meuCarro);
    } catch (e) {
      assert(false, "A string de retorno não é um JSON válido");
    }

    assert(
      typeof meuCarro === "object",
      "A string de retorno deveria ser um objeto JSON. É um JSON válido?"
    );

    assert(
      "marca" in meuCarro,
      "O objeto de retornado não possui o atributo marca"
    );

    assert(
      meuCarro.marca === "Renault",
      "A marca do carro não é mesma que foi recebida"
    );

    assert(
      "modelo" in meuCarro,
      "O objeto retornado não possui o atributo modelo."
    );

    assert(
      meuCarro.modelo === "Sandero",
      "O modelo do carro não é o mesmo que foi recebido"
    );

    assert("cor" in meuCarro, "O objeto retornado não possui o atributo cor.");

    assert(
      meuCarro.cor === "Vermelho",
      "A cor do carro não é a mesma que foi recebida"
    );
  });
});
