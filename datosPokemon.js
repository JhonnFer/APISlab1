const consultarPokemon = (id, number) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
        //console.log(data);
            pintarPokemon(data, number);
        })
    .catch(error => {
        console.log(error);
    });
};


const btnSeleccionar = () => {
    let primerPokemon = Math.floor(Math.random() * 150) + 1;  // de 1 a 150
    let segundoPokemon = Math.floor(Math.random() * 150) + 1;
    consultarPokemon(primerPokemon, 1);
    consultarPokemon(segundoPokemon, 2);
};


const lista = document.getElementById("listarpokemon");

const pintarPokemon = (data, id) =>
    {
        let item = lista.querySelector(`#pok-${id}`);
        item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.front_default);
        item.getElementsByTagName("p")[0].innerHTML = data.name;
    }


// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbytagname2
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_queryselector
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_setattribute1