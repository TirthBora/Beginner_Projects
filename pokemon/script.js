async function fetchdata() {
    try {
        const pokemonname = document.getElementById("pokemonName").value.toLowerCase();
        
        if (!pokemonname) {
            alert("Please enter a Pokemon name");
            return;
        }
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);
        
        if (!response.ok) {
            throw new Error("Pokemon not found");
        }
        
        const data = await response.json();
        const sprite = data.sprites.front_default;
        const imagelement = document.getElementById("pokemonsprite");
        
        imagelement.src = sprite;
        imagelement.style.display = "block";
    }
    catch (error) {
        console.error(error);
        alert("Could not find Pokemon. Please try again.");
    }
}