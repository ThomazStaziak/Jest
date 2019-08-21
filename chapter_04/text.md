**Esclarecimento: Os erros neste exercício não são exibidos tão bonitos quanto gostaríamos. Preste atenção ao texto em negrito e sublinhado para encontrar uma boa pista**

Para este exercício, vamos finalmente implementar o AJAX usando uma API externa. O objetivo será listar os tipos de Pokemon existentes. A URL desta API será **"https://pokeapi.co/api/v2/type/"**

É importante, antes de continuar, entender o formato de retorno dessa API. Uma resposta seria assim:

```javascript
{
  "resultados": [
    {
      "nome": "fogo",
      "url": "https://pokeapi.co/api/v2/type/10/",
    }
  ]
}
```

Em outras palavras: se consultarmos a API, um JSON será retornado com todas essas informações. Se transformarmos em um objeto, ele terá um atributo **"results"** que possui uma matriz de tipos internamente. Cada tipo tem **"nome"** e **"url"**

Qual é o seu trabalho?

Consumir esta API e adicionar uma `<li>` a cada um dos tipos para a <ul> do nosso HTML, incluindo o nome do tipo como conteúdo. Não esqueça de usar o `innerHTML`

Em outras palavras, o `<ul>` deve ficar assim:

```html
<ul>
  <li>normal</li>
  <li>fighting</li>
  <li>poison</li>
</ul>
```

Para aqueles que se sentem corajosos, eles podem começar com o exercício praticamente em branco. No entanto, como sabemos que o desafio é complexo, deixamos você na pista abaixo de um molde que já está encarregado de obter os cursos API para que eles possam operar com esses cursos e criar o `` <li> ''

Finalmente, se você se encontrar muito preso, no próximo exercício você encontrará a solução: wink:

Muitos sucessos!
