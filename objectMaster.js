const pokemon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
]);

//id divisible por 3

const idDivThree = pokemon.filter((e)=> e.id%3===0);
console.log(idDivThree);

//tipos fuego

const tipoFuego = pokemon.filter((e)=> e.types.includes("fire"))
console.log(tipoFuego);

//mas de un tipo

const moreTypes = pokemon.filter((e)=> e.types.length > 1)
console.log(moreTypes);

//solo nombres

const nombrePokemons = pokemon.map((e)=>{
  return e.name;
})
console.log(nombrePokemons);

//solo nombres e id mayor a 99

const nombrePokemonsMayorid = pokemon.filter((e)=>e.id>99).map((e)=>e.name)

console.log(nombrePokemonsMayorid);

//una matriz solo con nombres de los que solo tengan tipo veneno

const tipoVen = pokemon.filter((e)=>e.types.length===1 && e.types.includes("poison")).map((e)=>e.name
)
console.log(tipoVen);

//matriz con el primer tipo de todos cuyo segundo tipo es volador

const primerTipo = pokemon.filter((e)=>e.types.includes("flying")).map((e)=> e.types[0])

console.log(primerTipo);

//recuento normales
var count;
const cont = pokemon.filter((e)=>e.types.includes('normal'));

console.log(cont.length);

