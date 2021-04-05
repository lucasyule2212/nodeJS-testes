//importando módulos de funçoes
import {sum} from "./sum.mjs";
import { mult } from "./mult.mjs";
import { div } from "./div.mjs";
import { sub } from "./sub.mjs";
import { mod } from "./mod.mjs";

//Utilizando o Node para setar inputs ao script
let args=process.argv.slice(2); //args = input do node, que gera um array dos argumentos passados no cmder Node
                                //o método Slice retorna um array "partido" a partir do índice passado.

let a = Number(args[1]);
let b = Number(args[2]);
let c;

switch (args[0]) {
    case "sum":
        c=sum(a,b);
        break;
    case "mult":
        c=mult(a,b);
        break;     
     case "div":
        c=div(a,b);
        break;
     case "sub":
        c=sub(a,b);
        break;
     case "mod":
        c=mod(a,b);
        break;

    default:
        c="Operation not defined!"
        break;
}

console.log(c);
