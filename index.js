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
        default: return false;
    }
}
console.log(calculator(3, 5, "?"))
console.log(calculator(3, 5, "+"))
console.log(calculator(3, 5, "/"))
