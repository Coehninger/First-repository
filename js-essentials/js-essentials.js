// 0 - Bajar repo, hacer hola mundo console.log

// const nombre = "Carlos 🍑";
// console.log(`Hola, ${nombre}. hola`);
// console.log("Hola", nombre, ". hola");

// 1- Funcion greet (name)
// function greet(name) {
//   console.log(`hello ${name}, have a good fly 🛫`);
// }

// greet("pepe");

// function greet(name) {
//   return `hello ${name}, have a good fly 🛫`;
// }

// // let resultado = greet("pepe");
// console.log(greet("pepe🍗🍟"));

// 2 - Funciones:
// function add(firstOperator, secondOperator) {
//   return firstOperator + secondOperator;
//   const result = firstOperator + secondOperator;
//   return result;
// }
// add(3, 5);

// const resultado = add(3, 5);
// console.log(resultado);
// console.log(add(4, 4));

// const isRaining = false;

// if (isRaining) {
//   console.log("usar 🍗");
// } else {
//   console.log("usar 😎");
// }

// if (7 > 9){
//     console.log("es mayor");
// } else {
//     console.log("es menor");
// }

// add(firstOperator, secondOperator),
// subtract(firstOperator, secondOperator),
// divide(firstOperator, secondOperator),
// multiply(firstOperator, secondOperator)

// 3 - Funcion
// dress(temperature, isRaining)
// si llueve, llevar paraguas☂️. si la temperatura
// es menor a 10 ir en auto🚗, si es mayor a 30 ir de short🩳.
// si la temperatura es 30 usar lentes 🕶

// --temperature=30, isRaining=true/false
// function dress(temperature, isRaining) {
//   if (isRaining) {
//     console.log("llevar paraguas 🌂");
//   }

//   // una manera mas corta
//   if (temperature < 10) {
//     console.log("ir en 🚗");
//   } else if (temperature >= 30) {
//     console.log("ir de 🩳😎");
//   }

//   if (temperature === 100) {
//     console.log("🌵");
//   }
// }
// dress(30, true);

// function faces(number) {
//   let face;

//   switch (number) {
//     case 1:
//       face = "😎";
//       break;

//       case 2:
//         face = "😗";
//         break;

//         case 3:
//         face = "😊";
//         break;

//         default:
//         face = "🍗";
//         break;
//   }
//     return face;
// }
// var result = faces(1);
// console.log(result);

// for (let index = 0; index < 10; index++) {
//   // console.log("🥑")
// }

// let array = ["🍍", "🥭 ", "🍇", "🍋"];
// for (let index = 0; index < array.length; index++) {
//   console.log(`estoy comiendo ${array[index]}`);
// }

// 4 - Funcion
// calculate(operation, firstOperator, secondOperator)

// 5 - Funcion
// eating(name, foods['🍔','🍟','🍗',])

// 6 - Funcion
// finalCountDown(count)

// 7 - Funcion
// checkoutCart(person{name: cart:['👗','💍','🧦']})

// 8 - Funcion
// fillCart(person, articlesCollection)
// cartArticlesCollection: [{article: '👟',amount: 1}...])

// 9 - Funcion
// countBanana(inventory['🥑','🍌','🥭', '🍌']})

// const usuarios = ["ana", "pepe", "jose"];

// console.log(usuarios[0]);
// console.log(usuarios[1]);
// console.log(usuarios[2]);

// for (let index = 0; index < array.length; index = index++) {
//   console.log(usuarios[index]);
// }

// while (condition){

// }

// const users = [
//   { name: "pepe", age: 31 },
//   { name: "pedro", age: 31 },
//   { name: "ana", age: 25 },
//   { name: "random", age: 25 },
//   { name: "random", age: 25 },
//   { name: "random", age: 25 },
//   { name: "random", age: 25 },
//   { name: "random", age: 25 },
//   { name: "random", age: 25 },
// ];

// for (let index = 0; index < users.length; index++) {
//   if (users[index].age === 25) {
//     console.log(`la persona con 25 es: ${users[index].name}`);
//     let encontrado = true;
//   }
// }

function eating(name, foods) {
  console.log(name + " is eating:");
  for (let i = 0; i < foods.length; i++) {
    console.log(foods[i]);
  }
}

const users = [{ name: "pepe", foods: ["🍔", "🍗", "🥑"] }];

for (let index = 0; index < users.length; index++) {
  eating(users[index].name, users[index].foods);
}
