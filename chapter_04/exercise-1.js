describe("Exercício 1", function() {
  it("Test 1", function() {
    var input = "Juan    ,    Sol  ,  Pepe, Marta,    Dan";

    var output = bombaDeStrings(input);

    assert(typeof output === "string", "A função deve retornar uma string");

    assert(
      output.indexOf(",") !== -1,
      "Não tem nenhuma vírgula no seu resultado e os nomes deveriam estar separados por vírgulas"
    );

    assert(
      output.indexOf("Dan") === -1,
      "O nome 'Dan' não deveria estar no resultado já que não tem mais de 3 caracteres. Não se esqueça dessa avaliação"
    );

    assert(
      output.indexOf("Pepe") === -1,
      "O nome 'Pepe' não deveria estar no resultado já que não tem a letra 'a' minúscula. Não se esqueça dessa avaliação"
    );

    var nomes = output.split(",");

    assert(
      nomes.length === 2,
      "A quantidade de nomes retornados não é correta"
    );

    assert(
      output === "Juan,Marta",
      "A quantidade de nomes é correta mas a string retornada não. Era esperado 'Juan,Marta' e foi recebido '" +
        output +
        "'"
    );
  });

  it("Test 2", function() {
    var input = "Juan    ,    Sol  ,  Pepe, Marta,    Dan,    Inaki  ";

    var output = bombaDeStrings(input);

    assert(typeof output === "string", "A função deve retornar uma string");

    assert(
      output.indexOf(",") !== -1,
      "Não tem nenhuma vírgula no seu resultado e os nomes deveriam estar separados por vírgulas"
    );

    assert(
      output.indexOf("Dan") === -1,
      "O nome 'Dan' não deveria estar no resultado já que não tem mais de 3 caracteres. Não se esqueça dessa avaliação"
    );

    assert(
      output.indexOf("Pepe") === -1,
      "O nome 'Pepe' não deveria estar no resultado já que não tem a letra 'a' minúscula. Não se esqueça dessa avaliação"
    );

    var nomes = output.split(",");

    assert(
      nomes.length === 3,
      "A quantidade de nomes retornados não é correta"
    );

    assert(
      output === "Juan,Marta,Inaki",
      "A quantidade de nomes é correta mas a string retornada não. Era esperado 'Juan,Marta,Inaki' e foi recebido '" +
        output +
        "'"
    );
  });
});
