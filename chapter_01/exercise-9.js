it("Caso True", function() {
  _confirm_response_ = true;
  _dispatch_("load", document);

  const teveConfirm = _last_confirm_message_ !== null;

  true.should.eql(teveConfirm, "<b><u>Utilizou a função confirm?</u></b>");

  _last_confirm_message_.should.eql(
    "Você quer nosso boletim informativo?",
    "<b><u>O confirm deveria dizer 'Você quer nosso boletim informativo?'</u></b>"
  );

  const tevePrompt = _last_prompt_message_ !== null;

  true.should.eql(
    tevePrompt,
    "<b><u>Utilizou a função prompt depois do confirm?</u></b>"
  );

  _last_prompt_message_.should.eql("Quais são seus interesses?");
});

it("Caso False", function() {
  _confirm_response_ = false;
  _dispatch_("load", document);

  const teveConfirm = _last_confirm_message_ !== null;

  true.should.eql(teveConfirm, "<b><u>Utilizou a função confirm?</u></b>");

  _last_confirm_message_.should.eql(
    "Você quer nosso boletim informativo?",
    "<b><u>O confirm deveria dizer 'Você quer nosso boletim informativo?'</u></b>"
  );

  const tevePrompt = _last_prompt_message_ !== null;

  true.should.eql(
    tevePrompt,
    "<b><u>Utilizou a função prompt logo depois de confirm?</u></b>"
  );

  _last_prompt_message_.should.eql("Por que não?");
});
