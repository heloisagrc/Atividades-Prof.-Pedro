let counter = 0;

const actions = {
    'action-1': 'Clicou no primeiro botão',
    'action-2': 'Clicou no segundo botão',
    'action-3': 'Clicou no terceiro botão',
    'action-4': 'Clicou no quarto botão'
};

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const action = actions[button.id];
        counter++;
        document.getElementById('counter').innerHTML = `${action} - ${counter} vez(es)`;
    });
});