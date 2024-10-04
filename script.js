// let arr = [1, 2, 3, 4, "Jhon"];
// console.log(arr);

// // Push Operation
// arr.push("Doe");
// console.log(arr);

// // Pop Operation
// arr.pop("Doe");
// console.log(arr);

// // Unshift Operation
// arr.unshift("Alice");
// console.log(arr);

// // Shift Operation
// arr.shift();
// console.log(arr);

// // Destructuring of array
// let [a, b, c] = arr;
// console.log(`a = ${a}, b = ${b}, c = ${c}`);

// let obj = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };
// console.table(obj);

// let { name, city } = obj;
// console.log(`name: ${name} , city name: ${city}`);

// // this binding

// // normal function
// function displayName(name) {
//   console.log(name);
// }

// // Arrow Function
// let displayUser = (name) => console.log(name);

// let Alice = new displayName("Alice");
// // console.log("jhon"*"doe") // Example of NaN
// // let Marsh = new displayUser("Marsh") // it doesn't work with Arrow Function



let newArr = [10,20,30,40,50,60];
// slice
console.log(newArr.slice(0,3));

//splice
newArr.splice(1,1,5)
console.log(newArr)

// map
let secArr = newArr.map((val)=>{
    console.log(val);
    return val;
})
console.log(secArr)

// filter

let thArr = newArr.filter((val)=>{
    if(val > 20){
        console.log(val);
        return val;
    }
})
console.log(thArr)

// Reduce

let product = newArr.reduce((prev, curr)=>{
    return (curr *= prev);
}, 1)
console.log(product)

// forEach
newArr.forEach((val)=>{
    console.log(val)
})