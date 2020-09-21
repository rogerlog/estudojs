//var nome = "Roger Guimaraes";

//alert("Meu primeiro js " + nome);
//console.log(nome);
//console.log(nome.replace("Roger", "Joao"));

var lista = ["Teste 1", "Teste 2", "Teste 3"];

console.log(lista);
console.log(lista.reverse);
console.log(lista.toString());
console.log(lista.join(" - "));


//Dicionário
var frutas = [{ nome: "maça", cor: "vermelha" }, { nome: "uva", cor: "roxa" }];
console.log(frutas);

//condicional
var idade = 18;
//idade = prompt("Qual sua idade?");

if (idade > 18) {
    console.log("maior de idade");
} else {
    console.log("menor de idade");
}

var count = 5;
while (count < 5) {
    console.log(count);
    count++;
}

var count = 0;

for (count = 0; count <= 5; count++) {
    console.log(count);
}

var d = new Date();
console.log(d);
console.log(d.getMonth());
console.log(d.getDay());