it("Test video 1", function() {
  _prompt_response_ = "rNSnfXl1ZjU";

  _dispatch_("load", document);

  var tevePrompt = _last_prompt_message_ !== null;

  true.should.eql(tevePrompt, "<b><u>Utilizou a função prompt?</u></b>");

  var definiuSrc =
    document.querySelector("iframe").getAttribute("src") !== null;

  definiuSrc.should.eql(true, "Não definiu o atributo src do iframe?");

  document
    .querySelector("iframe")
    .getAttribute("src")
    .should.be.eql("https://www.youtube.com/embed/" + _prompt_response_);
});

it("Test Video 2", function() {
  _prompt_response_ = "DgdMV3IczYY";

  _dispatch_("load", document);

  var tevePrompt = _last_prompt_message_ !== null;

  true.should.eql(tevePrompt, "<b><u>Utilizou a função prompt?</u></b>");

  var definiuSrc =
    document.querySelector("iframe").getAttribute("src") !== null;

  definiuSrc.should.eql(true, "Não definiu o atributo src do iframe?");

  document
    .querySelector("iframe")
    .getAttribute("src")
    .should.be.eql("https://www.youtube.com/embed/" + _prompt_response_);
});
