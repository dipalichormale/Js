const marvel_rehos = ["thor", "Ironman" ]
const dc_heros = [ "superman", "flash"]

// marvel_rehos.push(dc_heros)

// console.log(marvel_rehos);
// console.log(marvel_rehos[2][1]);

const allheros = marvel_rehos.concat(dc_heros)
// console.log(allheros);

const allnewheros = [...marvel_rehos, ...dc_heros]
// console.log(allnewheros);

const another_array = [1, 2, 3, [4, 5, 6], [6, 7,  [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



console.log(Array.isArray("dipali"));
console.log(Array.from("dipali"));
console.log(Array.from({name:"dipali"}));  // interesting case interview


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2, score3));