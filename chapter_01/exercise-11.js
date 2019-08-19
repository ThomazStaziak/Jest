it("Trocar para azul", function() {
  _prompt_response_ = "blue";

  _dispatch_("load", document);

  const tevePrompt = _last_prompt_message_ !== null;

  true.should.eql(tevePrompt, "<b><u>Utilizou a função prompt?</u></b>");

  _last_prompt_message_.should.eql("Escolha uma cor");

  var lis = document.querySelectorAll("li .lista");

  for (var i = 0; i < lis.length; i++) {
    lis[i].style.color.should.be.eql("blue");
  }
});

it("Trocar para verde", function() {
  _prompt_response_ = "green";

  _dispatch_("load", document);

  const tevePrompt = _last_prompt_message_ !== null;

  true.should.eql(tevePrompt, "<b><u>Utilizou a função prompt?</u></b>");

  _last_prompt_message_.should.eql("Escolha uma cor");

  var lis = document.querySelectorAll("li .lista");

  for (var i = 0; i < lis.length; i++) {
    lis[i].style.color.should.eql("green");
  }
});
