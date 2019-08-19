// Test code
describe("Exercício 2", function() {
  it("Existe a variável Ginobili?", function() {
    assert(
      typeof ginobili !== "undefined",
      "A variável ginobili não foi criada"
    );
  });

  it("É um objeto", function() {
    assert(typeof ginobili === "object", "A variável ginobili não é um objeto");
  });

  it("Tem atributos?", function() {
    assert(
      typeof ginobili.nome !== "undefined",
      "A variável ginobili precisa ter um atributo nome"
    );

    assert(
      typeof ginobili.sobrenome !== "undefined",
      "A variável ginobili precisa ter um atributo sobrenome"
    );

    assert(
      typeof ginobili.pontos !== "undefined",
      "A variável ginobili precisa ter um atributo pontos"
    );
  });

  it("Valores atribuídos", function() {
    assert(
      ginobili.nome === "Emanuel",
      "O atributo nome da variável ginobili deve ser uma string com o valor Emanuel"
    );

    assert(
      ginobili.sobrenome === "Ginobili",
      "O atributo sobrenome da variável ginobili deve ser uma string com o valor Ginobili"
    );

    assert(
      ginobili.pontos === 0,
      "O atributo pontos da variável ginobili deve ser um inteiro com o valor 0"
    );
  });
});
