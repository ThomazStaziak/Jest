// Default code
let ginobili = {
  nome: "Emanuel",
  sobrenome: "Ginobili",
  pontos: 0,
  cumprimentar(nome) {
    return "Olá " + nome + " eu sou o Emanuel";
  },
  mais2() {
    this.pontos += 2;
  },
  mais3() {
    this.pontos += 3;
  }
};

// Test code
describe("Exercício 6", function() {
  it("Contando pontos", function() {
    assert(
      ginobili.pontos === 10,
      `Emanuel deveria ter 10 pontos, mas tem ${ginobili.pontos} pontos`
    );
  });
});
