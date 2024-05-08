
let eta = prompt("Inserisci la tua eta'","00");
if (Number(eta)>=18){
    console.log("Puoi votare");
}else{
    console.log("Non puoi votare");
}
let nome = prompt("Inserisci il tuo nome'","");
console.log("Eccoti lo spelling");
for(let i=0;i<nome.length;i++){
    console.log(nome[i]);
}


let punteggio = prompt("Inserisci il punteggio ottenuto'","00");
if (punteggio>=90){
    console.log("A");
}else if (punteggio>=80 && punteggio<=89) {
    console.log("B");
}else if (punteggio>=70 && punteggio<=79) {
    console.log("C");
}else if (punteggio>=60 && punteggio<=69) {
    console.log("D");
}else{
    console.log("F")
}


// versione con switch

let punteggio = prompt("Inserisci il punteggio ottenuto'","00");
Number(punteggio)
switch (true){
    case punteggio>=90:
        console.log("A");
        break;
    case punteggio>=80 && punteggio<=89:
        console.log("B");
        break;
    case punteggio>=70 && punteggio<=79:
        console.log("C");
        break; 
    case punteggio>=60 && punteggio<=69:
        console.log("D");
        break;   
    default: console.log("F");
}


let numero = prompt("Inserisci un numero'");
if(numero.includes(',')){
    console.log("Inserisci un numero intero pls")
}else{
    Number(numero)
    if(numero%2==2){
        console.log("Il numero e' pari")
    }else{
        console.log("Il numero e' dispari")
    }
}


let array=[1,2,3,4,5,6,7,8,9,10];
let somma=0;
let max=0;
for (let i=0;i<array.length;i++){
    somma+=array[i];
    if (max<array[i]){
        max=array[i];
    }
}
console.log(somma);
console.log(max)


let umano={
    nome : 'Manuel',
    cognome : 'Di Nardo',
    eta : 20,
    professione : "ty"
}
