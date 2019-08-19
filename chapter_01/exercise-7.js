it("Enviar um alert que diga 'Bem-vindo!'", function() {
  _dispatch_("load", document);
  var teveAlert = _last_alert_message_ !== null;

  true.should.eql(teveAlert, "<b><u>Utilizou a função alert?</u></b>");

  _last_alert_message_.should.eql(
    "Bem-vindo!",
    "<b><u>O alert deveria dizer 'Bem-vindo!'</u></b>"
  );
});
