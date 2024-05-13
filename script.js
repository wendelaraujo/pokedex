const pokemonImg = document.querySelector('.pokemon-img')
const pokemonName = document.querySelector('.pokemon-name')
const pokemonNumber = document.querySelector('.pokemon-number')

const form = document.querySelector('.form')
const input = document.querySelector('.buscar')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')

let pokemonAtual = 1

function renderPokemon(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    fetch(url)
        .then((response) => {
            if (response.status === 200) {
                return response.json()
            }
        }).then((data) => {
            if (data) {
                pokemonImg.style.display = 'block'
                pokemonName.innerText = data.name
                pokemonNumber.innerText = data.id
                pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
                input.value = ''
                pokemonAtual = data.id
            }
            else {
                pokemonImg.style.display = 'none'
                pokemonNumber.innerText = ''
                pokemonName.innerText = 'Não encontrado :c'
            }
        }

        )
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    renderPokemon(input.value.toLowerCase())
})

btnNext.addEventListener('click', () => {
    pokemonAtual++
    renderPokemon(pokemonAtual)

})

btnPrev.addEventListener('click', () => {
    if (pokemonAtual > 1)
    pokemonAtual--
    renderPokemon(pokemonAtual)

})


renderPokemon(pokemonAtual)