// Calculator
let calculator = (val1, val2, opr)=>{
    switch(opr){
        case '+': return val1+val2;
        break; 
        case '-': return val1-val2;
        break; 
        case '*': return val1*val2;
        break; 
        case '/': return val1/val2;
        break; 
        case '%': return val1%val2;
        break; 
        default: return false
    }
}
console.log(calculator(3, 5, "?"))
console.log(calculator(3, 5, "+"))
console.log(calculator(3, 5, "/"))

// Clouser Example
let counter = ()=>{
    let count = 1;
    return ()=>{
        count++;
        return count;
    }
}
let valueIncrementer = counter();
console.log(valueIncrementer());

// Destructuring

// Destructuring of array
let arr = [1, 2, 3, 4, "Jhon"];
let [a, b, c] = arr;
console.log(`a = ${a}, b = ${b}, c = ${c}`);

// Destructuring of object
let obj = {
  name: "John",
  age: 30,
  city: "New York",
};
console.table(obj);

let { name, city } = obj;
console.log(`name: ${name} , city name: ${city}`);
