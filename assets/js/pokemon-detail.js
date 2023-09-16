class Pokemons {
    constructor (name, type, altura, peso, habilidade){
        this.name = name;
        this.type = type;
        this.altura = altura;
        this.peso = peso;
        this.habilidade = habilidade;
    }
}



function handlePokemonDetailClick(clickedElement) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHTML = pokemons.map((pokemon) => {

                const parentLi = clickedElement.closest('.pokemon');
                const pokemondetail = new Pokemons('NovoNome', 'NovoTipo', 'NovaAltura', 'NovoPeso', 'NovaHabilidade');
                parentLi.innerHTML = '';

                const nameSpan = document.createElement('span');
                nameSpan.textContent = `Nome: ${pokemon.name}`;

                const typeSpan = document.createElement('span');
                typeSpan.textContent = `Tipo: ${pokemon.type}`;

                const heightSpan = document.createElement('span');
                heightSpan.textContent = `Altura: ${pokemon.altura}`;

                const weightSpan = document.createElement('span');
                weightSpan.textContent = `Peso: ${pokemon.peso}`;

                const abilitySpan = document.createElement('span');
                abilitySpan.textContent = `Habilidade: ${pokemon.habilidade}`;



                parentLi.appendChild(nameSpan);
                parentLi.appendChild(typeSpan);
                parentLi.appendChild(heightSpan);
                parentLi.appendChild(weightSpan);
                parentLi.appendChild(abilitySpan);

        })

    })
}
// Adiciona um ouvinte de evento de clique aos botões "Details"
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('detalhes')) {
        // Chama a função handlePokemonDetailClick, passando o botão clicado como argumento
        handlePokemonDetailClick(event.target);
    }
});
