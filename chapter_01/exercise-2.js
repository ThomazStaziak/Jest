// Default code
let ginobili = {
  nome: "Emanuel",
  sobrenome: "Ginobili",
  pontos: 0
};

// Test code
describe("Exercício 3", function() {
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

  it("Cumprimentar", function() {
    assert(
      typeof ginobili.cumprimentar === "function",
      "A variável ginobili deve ter um método cumprimentar"
    );

    const cumprimento = ginobili.cumprimentar();

    assert(
      cumprimento !== "undefined",
      "A função cumprimentar não tem nenhum retorno"
    );

    assert(
      cumprimento === "Olá eu sou o Emanuel",
      `O método cumprimentar está retornando o texto '${cumprimento}' em vez de 'Olá eu sou o Emanuel'`
    );
  });
});
