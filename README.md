🧠 Desafio: "Sequência de cálculos"


Dado um array de objetos que representam ações com os seguintes campos:

{
  id: number,
  type: 'add' | 'multiply' | 'subtract' | 'reset',
  value: number
}


Crie uma função que receba esse array de ações e um número inicial, e execute as ações sequencialmente com base no id, respeitando a ordem, retornando o valor final.

Regra especial:

Sempre que encontrar uma ação do tipo 'reset', o valor atual deve voltar a ser o valor inicial recebido pela função.



✨ Exemplo:

const actions = [
  { id: 1, type: 'add', value: 10 },
  
  { id: 2, type: 'multiply', value: 2 },
  
  { id: 3, type: 'subtract', value: 5 },
  
  { id: 4, type: 'reset', value: 0 },
  
  { id: 5, type: 'add', value: 3 }
  
];

const result = processActions(actions, 5);

console.log(result); // Saída esperada: 8


📌 Explicação do cálculo:





Começa com 5

Soma 10 → 15

Multiplica por 2 → 30

Subtrai 5 → 25

Reset → volta pra 5

Soma 3 → 8 ✅



🧩 Requisitos:



A função deve ser nomeada processActions.
