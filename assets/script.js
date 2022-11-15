var amountOfPokemons = document.getElementById('amountOfPokemons');
amountOfPokemons.addEventListener('keyup',()=>{
    getPokemons(amountOfPokemons.value);
})

getPokemons(6);

function getPokemons(amountOfPokemons){
    fetch('https://pokeapi.co/api/v2/pokemon?limit='+amountOfPokemons)
    .then(response => response.json())
    .then(allpokemon => {

        var pokemons = [];

        allpokemon.results.map((val)=>{

            fetch(val.url)
            .then(response => response.json())
            .then(pokemonSingle => {
                pokemons.push({name:val.name,
                image:pokemonSingle.sprites.front_default});

                if(pokemons.length == amountOfPokemons){
              
                var pokemonBoxes = document.querySelector('.pokemon-boxes');
                pokemonBoxes.innerHTML = "";

                    pokemons.map((val)=>{
                    pokemonBoxes.innerHTML+=`            
                    <div class="pokemon-single">
                    <img src="`+val.image+`" alt="">
                    <h2>`+val.name+`</h2>
                </div> `;
                })
            }
            })
        })

    })
}