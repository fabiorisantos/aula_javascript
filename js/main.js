function clicar (){
    document.getElementById("agradecimento").innerHTML = "<h1>Obrigado por clicar</h1>";
    console.log(document.getElementById("agradecimento"));
    //alert ("Obrigado por clicar!!!")
}

function trocar (){
    window.open("https://fabiorisantos.github.io/"); //outra aba
    //window.location.href = "https://fabiorisantos.github.io/"; //mesma aba
}

function mudar () {
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!!!";
    //alert("Trocar texto");
}

function voltar () {
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    //alert("Trocar texto");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
var d = new Date ();
console.log(d);
console.log(d.getMonth()+1);
console.log(d.getDate());
console.log(d.getHours());
*/

/*
var count;
for (count=0; count <= 5; count++){
    console.log(count);
}
*/

/*
var count = -10;
while (count < 5){
    console.log(count);
    //count = count + 1;
    count++;
}
*/

/*
var idade = prompt ("Qual a sua idade?")
//var idade = 18;
if (idade >= 18){
    alert ("maior de idade");
} else {
    alert ("menor de idade");
};
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"} , {nome:"uva", cor:"roxa"} , {nome:"laranja", cor:"amarela"}];
console.log(frutas);
console.log(frutas[0].nome);
alert (frutas[1].cor);
*/


/*
var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
alert (fruta.cor);
*/

//var lista = ["maça" , "perâ", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" | "));


//var nome = "Fábio Ribeiro dos Santos";
//var idade = 39;
//var idade2 = 10;
//var frase = "Brasil é o melhor país do mundo"
//alert(nome + " tem " + idade + " anos");
//alert (idade + idade2);
//console.log(nome);
//console.log(idade+idade2);
//console.log(frase.toLowerCase());
//alert(nome.replace("Fábio","Christian Javier Quispe"));