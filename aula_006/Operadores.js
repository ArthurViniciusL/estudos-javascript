//aritimeticos
/*
var soma = 5 + 2;
var subtracao = 5 - 2;
var multiplicacao = 5 * 2;
var potenciacao = 5 ** 2;
var divisao = 5 / 2;
var resto = 5 % 2;

console.log("Soma: " + soma);
console.log("Subtração: " + subtracao);
console.log("Multiplicação: " + multiplicacao);
console.log("Potenciação: " + potenciacao);
console.log("Divisão: " + divisao);
console.log("Resto: " + resto);

let media_01 = (5 + 3) / 2;
let media_02 = soma / 2;

console.log("Fazendo uma média:");
console.log("Média 02: " + media_01);
console.log("Média 01: " + media_02);
//Lembrando sempre da ordem de precedências (P.E.N.D.A.S);

//atribuição
var n = 10;
console.log(n += 1);
console.log(n++);
console.log(++n);

console.log(n -= 1);
console.log(n--);
console.log(--n);

//relacionais
var a = 8;
var b = 7;
var c = "8";

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a != c);
console.log(a == c); //não analisa o tipo, só o conteúdo
console.log(a === c); //igualdade de restrição
console.log(a !== c); //desigual restrito
 */
var a = 8;
var b = 7;
var c = "8";

//lógicos
console.log((a > b) && (b > a)); //E (conjunção)

console.log((a > b) && !(b > a) ); //Ou (disjunção)

console.log((a > b) || (b > a)); //Ou (disjunção)

console.log((a > b) && (a % 2 == 0));