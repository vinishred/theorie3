// Toujours faire du pseudo-code en français avant d'écrire son code
// Condition : si qqch ou siqqch sinon
// prompt sert à interagir avec l'utilisateur
const age = prompt("Quel age avez vous ?");

//En Ternaire
// const maConstante = if === true ? si oui alors on a ça : sinon on a ça
const validAge = isNaN(age)
  ? console.log("ce que vous avez écrit n'est pas un nombre !")
  : console.log("vous avez écrit un nombre correct");

if (isNaN(age)) {
  console.log("veuillez écrire un âge numérique svp ;) !");
} else {
  if (age >= 18 && age < 21) {
    console.log("est mineur pour les USA et majeur pour l'Europe");
  } else if (age > 21) {
    console.log("vous êtes majeur dans tous les pays");
  } else {
    console.log("vous êtes mineur");
  }
}

// == égalité valeur
// === égalité valeur et type à utiliser+++
