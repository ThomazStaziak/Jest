Seu objetivo é completar a função `bombaDeStrings` que recebe como um parâmetro `umaString`. Este parâmetro será uma string que terá muitos nomes separados por "," com o seguinte formato:

**"Thomaz, Vinicius,Natalia, Sérgio, Hendy, Victor,Felipe"**

Repare que a string não é completamente padronizada pode ou não existir espaços antes e depois das vírgulas.

A função deve fazer o seguinte:

> 1. Separar o parâmetro `umaString` por vírgulas para obter um array com cada um dos nomes. Você pode fazer isso usando a função `split`

> 2. Para cada um dos nomes, remova os espaços restantes. Você pode fazer isso usando a função `trim`

> 3. Gere um novo array contendo apenas nomes que tenham mais de 3 caracteres e que incluam a letra minúscula **a**. Você pode fazer isso usando os métodos `length` e `indexOf`. Para isso você terá que filtrar **cada um** dos elementos e adicionar os valores que passam no filtro para um novo array. Não esqueça de usar `push`.

> 4. Converta a matriz de resultados em uma string usando o método `toString`

> 5. Finalmente, retorne o resultado

Boa sorte!
