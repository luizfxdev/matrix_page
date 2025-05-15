// Ações pré-definidas para o desafio
const predefinedActions = [
    { id: 1, type: 'add', value: 10 },
    { id: 2, type: 'multiply', value: 2 },
    { id: 3, type: 'subtract', value: 5 },
    { id: 4, type: 'reset', value: 0 },
    { id: 5, type: 'add', value: 3 }
];

// Função principal que processa as ações
function processActions(actions, initialValue) {
    let currentValue = initialValue;
    let steps = [`Começa com ${initialValue}`];
    const initial = initialValue; // Guarda o valor inicial para resets

    // Ordena as ações por ID para garantir a ordem correta
    actions.sort((a, b) => a.id - b.id);

    for (const action of actions) {
        switch (action.type) {
            case 'add':
                currentValue += action.value;
                steps.push(`Soma ${action.value} → ${currentValue}`);
                break;
            case 'subtract':
                currentValue -= action.value;
                steps.push(`Subtrai ${action.value} → ${currentValue}`);
                break;
            case 'multiply':
                currentValue *= action.value;
                steps.push(`Multiplica por ${action.value} → ${currentValue}`);
                break;
            case 'reset':
                currentValue = initial;
                steps.push(`Reset → volta pra ${currentValue}`);
                break;
            default:
                steps.push(`Ação desconhecida: ${action.type} (ignorada)`);
        }
    }

    return { finalValue: currentValue, steps };
}

// Função para formatar os passos do cálculo
function formatSteps(steps) {
    return steps.map(step => `<div class="step">${step}</div>`).join('');
}

// Função para limpar todos os campos
function clearAll() {
    document.getElementById('initial-value').value = '';
    document.getElementById('calculation-steps').innerHTML = '';
    document.getElementById('final-result').innerHTML = '';
}

// Event listeners quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    const solveBtn = document.getElementById('solve-btn');
    const returnBtn = document.getElementById('return-btn');
    const initialValueInput = document.getElementById('initial-value');
    const calculationStepsDiv = document.getElementById('calculation-steps');
    const finalResultDiv = document.getElementById('final-result');

    // Botão RESOLVER
    solveBtn.addEventListener('click', () => {
        const initialValue = parseFloat(initialValueInput.value);
        if (isNaN(initialValue)) {
            alert("Por favor, insira um valor inicial válido");
            return;
        }

        const { finalValue, steps } = processActions(predefinedActions, initialValue);
        
        calculationStepsDiv.innerHTML = formatSteps(steps);
        finalResultDiv.innerHTML = `✅ <strong>RESULTADO FINAL: ${finalValue}</strong>`;
    });

    // Botão RETORNAR (limpa os campos)
    returnBtn.addEventListener('click', clearAll);

    // Exemplo inicial (opcional - pode remover se não quiser valor pré-definido)
    // initialValueInput.value = "5";
});