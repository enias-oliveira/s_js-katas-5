# Avaliação - Katas de JavaScript 5

# Visão Geral

Lembra de quando falamos sobre testes unitários? Revise a Aula: Teste Unitário se precisar refrescar a memória.

Para os katas de hoje, você irá implementar várias funções. Você deve escrever ao menos dois testes unitários para cada função demonstrando seu comportamento. Todo o output pode ser dado via console.assert(); você não precisa de qualquer formatação HTML para esses katas. Estas funções devem passar nos testes unitários que forem escritos.

*Por favor, nomeie seu repositório como 'katas5', seu arquivo Javascript como 'katas5.js' e siga as instruções de nomeação de função descritas abaixo. Isso irá permitir que os avaliadores encontrem suas funções.*

## Katas

1. Escreva duas funções de teste unitário chamadas testReverseString1 e testReverseString2. Em seguida, escreva uma função chamada reverseString que inverte uma string.
1. Escreva duas funções de teste unitário chamadas testReverseSentence1 e testReverseSentence2. Em seguida, escreva uma função cEm seguida, escreva duas funções de teste unitário chamadas testReverseSentence1 e testReverseSentence2
1. Escreva duas funções de teste unitário chamadas testMinimumValue1 e testMinimumValue2. Em seguida, escreva uma função chamada minimumValue que encontra o valor mínimo de um array.
1. Escreva duas funções de teste unitário chamadas testMaximumValue1 e testMaximumValue2. Em seguida, escreva uma função chamada maximumValue que encontra o valor máximo de um array.
1. Escreva duas funções de teste unitário chamadas testCalculateRemainder1 e testCalculateRemainder2. Em seguida, escreva uma função chamada calculateRemainder que calcula o resto (de uma determinada divisão).
1. Escreva duas funções de teste unitário chamadas testDistinctValues1 e testDistinctValues2. Em seguida, escreva uma função chamada distinctValues que retorna valores distintos de uma lista incluindo duplicatas (ou seja, "1 3 5 3 7 3 1 1 5" -> "1 3 5 7").
1. Escreva duas funções de teste unitário chamadas testCountValues1 e testCountValues2. Em seguida, escreva uma função chamada countValues que retorna os valores de uma lista e suas ocorrências (ou seja, a lista acima se torna "1(3) 3(3) 5(2) 7(1)").
1. Escreva duas funções de teste unitário chamadas testEvaluateExpression1 e testEvaluateExpression2. Em seguida, escreva uma função chamada evaluateExpression que, dado uma string de expressões (apenas variáveis, +, e -) e um objeto descrevendo um conjunto de pares de variáveis/valores como {a: 1, b: 7, c: 3, d: 14}, retorna o resultado da expressão ("a + b + c - d" seria -3).

Por exemplo, um teste unitário para o 8º kata poderia se parecer com isso:

```js
function testEvaluateExpression1() {
   let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
   console.assert(result === -3)
}
```

### Envio

Faça o push do código para seu repositório no GitLab e use a função do GitLab Pages que permite que o site seja visualizado diretamente. No Gitlab, por favor, adicione ka-br-correcoes como membro do seu projeto com a permissão "Reporter", e **envie a url do seu gitlab pages (Ex: https://nomedeusuário.gitlab.io/katas5)**.
