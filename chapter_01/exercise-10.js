it("Trocar para azul", function() {
  _prompt_response_ = "blue";

  _dispatch_("load", document);

  const tevePrompt = _last_prompt_message_ !== null;

  true.should.eql(tevePrompt, "<b><u>Utilizou a função prompt?</u></b>");

  _last_prompt_message_.should.eql("Escolha uma cor");

  document.querySelector("body").style.backgroundColor.should.be.eql("blue");
});

it("Trocar para vermelho", function() {
  _prompt_response_ = "red";

  _dispatch_("load", document);

  const tevePrompt = _last_prompt_message_ !== null;

  true.should.eql(tevePrompt, "<b><u>Utilizou a função prompt?</u></b>");

  _last_prompt_message_.should.eql("Escolha uma cor");

  document.querySelector("body").style.backgroundColor.should.be.eql("red");
});
