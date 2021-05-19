//importando módulos de funçoes
import calculadora from "./calculadora.js";

//Utilizando o Node para setar inputs ao script
let args=process.argv.slice(2); //args = input do node, que gera um array dos argumentos passados no cmder Node
                                //o método Slice retorna um array "partido" a partir do índice passado.
let a = Number(args[1]);
let b = Number(args[2]);
let c;

switch (args[0]) {
    case "sum":
        c=calculadora.sum(a,b);
        break;
    case "mult":
        c=calculadora.mult(a,b);
        break;     
     case "div":
        c=calculadora.div(a,b);
        break;
     case "sub":
        c=calculadora.sub(a,b);
        break;
     case "mod":
        c=calculadora.mod(a,b);
        break;
    default:
        c="Operation not defined!"
        break;
}

console.log(c);
