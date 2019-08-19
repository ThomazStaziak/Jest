it("Enviar uma confirmação que diga 'Você quer nosso boletim informativo?'", function() {
  _dispatch_("load", document);
  var teveConfirm = _last_confirm_message_ !== null;

  true.should.eql(teveConfirm, "<b><u>Utilizou a função confirm?</u></b>");

  _last_confirm_message_.should.eql(
    "Você quer nosso boletim informativo?",
    "<b><u>O cofirm deveria dizer 'Você quer nosso boletim informativo?'</u></b>"
  );
});
