it("AJAX", function() {
  _nock_.cleanAll();

  const mockedGet = _nock_("https://pokeapi.co")
    .get("/api/v2/type/")
    .reply(200, {
      count: 20,
      next: null,
      previous: null,
      results: [
        {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/"
        },
        {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/"
        },
        {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/"
        },
        {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/"
        },
        {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/"
        },
        {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/"
        },
        {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/"
        },
        {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/"
        },
        {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/"
        },
        {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/"
        },
        {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/"
        },
        {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/"
        },
        {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/"
        },
        {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/"
        },
        {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/"
        },
        {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/"
        },
        {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/"
        },
        {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/"
        },
        {
          name: "unknown",
          url: "https://pokeapi.co/api/v2/type/10001/"
        },
        {
          name: "shadow",
          url: "https://pokeapi.co/api/v2/type/10002/"
        }
      ]
    });

  _dispatch_("load", document);

  _wait_for_(() => mockedGet.isDone(), function() {
    var tipos = [
      "normal",
      "fighting",
      "flying",
      "poison",
      "ground",
      "rock",
      "bug",
      "ghost",
      "steel",
      "fire",
      "water",
      "grass",
      "electric",
      "psychic",
      "ice",
      "dragon",
      "dark",
      "fairy",
      "unknown",
      "shadow"
    ];

    var lis = document.querySelectorAll("li");

    tipos.length.should.eql(
      lis.length,
      "<b><u>Sua li não tem a mesma quantidade de elementos que o retorno da API</u></b>"
    );

    for (var i = 0; i < tipos.length; i++) {
      tipos[i].should.eql(
        lis[i].innerHTML,
        "<b><u>O li número " +
          i +
          " deveria conter '" +
          tipos[i] +
          "' mas contém '" +
          lis[i].innerHTML +
          "'</u></b>"
      );
    }
  });
});
