// const assert = require('assert');
const answerPhone = require('../src/asyncJest');
// const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  test('atende', async () => {
    const answer = await answerPhone('Oi!');
    expect(answer).toBe('Oi!');
  });

  test('ocupado', async () => {
    // parte do código tirado de https: //jestjs.io/pt-BR/docs/asynchronous
    // função toThrow tirado do material trybe : https://app.betrybe.com/course/fundamentals/testes-automatizados-com-jest/primeiros-passos-no-jest/28999aac-68b5-4aca-8c58-f9356ad8a00f/conteudos/e7d63c82-6e88-45fa-87fa-478f85168f58/expect-e-matchers/0fd0f1fb-e83e-4704-a9a6-e4e71d44ee02?use_case=previous_button
    const fail = 'Infelizmente não podemos atender...';
    await expect(answerPhone()).rejects.toThrowError(fail);
  });
});
