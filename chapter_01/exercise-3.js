// Default code
let ginobili = {
  nome: "Emanuel",
  sobrenome: "Ginobili",
  pontos: 0,
  cumprimentar: function() {
    return "Olá eu sou o Emanuel";
  }
};

// Test code
describe("Exercício 4", function() {
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

    const cumprimento = ginobili.cumprimentar("Thomaz");

    assert(
      cumprimento !== "undefined",
      "A função cumprimentar não tem nenhum retorno"
    );

    assert(
      ginobili.cumprimentar.length === 1,
      "O método cumprimentar deveria receber um parâmetro"
    );

    assert(
      cumprimento === "Olá Thomaz eu sou o Emanuel",
      `O método cumprimentar está retornando o texto '${cumprimento}' em vez de  'Olá Thomaz eu sou o Emanuel'`
    );

    const cumprimento1 = ginobili.cumprimentar("Martin");

    assert(
      cumprimento1 !== "undefined",
      "A função cumprimentar não tem nenhum retorno"
    );

    assert(
      cumprimento1 === "Olá Martin eu sou o Emanuel",
      `O método cumprimentar está retornando o texto '${cumprimento1}' em vez de  'Olá Martin eu sou o Emanuel'`
    );
  });
});
