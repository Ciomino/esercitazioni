let btBarbaro = document.getElementById("btBarbaro");
let btArciere = document.getElementById("btArciere");
let btStregone = document.getElementById("btStregone");
let containerBarbaro = document.getElementById("containerBarbaro");
let containerArciere = document.getElementById("containerArciere");
let containerStregone = document.getElementById("containerStregone");
let startButton = document.getElementById("startButton");
let spanText = document.getElementById("text");



let nome=prompt("inserire nickname");
if (nome != null) {
    document.getElementById("output").innerHTML =
    "<strong>Benvenut* " + nome + " scegli il personaggio e premi il pulsante Inizia per iniziare l'avventura.</strong>";
}

let Barbaro={
    abilita1:"lancio dell'ascia",
    abilita2:"carica"
}
let Stregone={
    abilita1:"palla di fuoco",
    abilita2:"pioggia di ghiaccio"
}
let Arciere={
    abilita1:"triplo colpo",
    abilita2:"tiro di precisione"
}

let champ=null;

function handleClickBarbaro() {
    containerArciere.classList.toggle("nascosto");
    containerStregone.classList.toggle("nascosto");
}

function handleClickArciere() {
    containerBarbaro.classList.toggle("nascosto");
    containerStregone.classList.toggle("nascosto");
}

function handleClickStregone() {
    containerArciere.classList.toggle("nascosto");
    containerBarbaro.classList.toggle("nascosto");
}

btBarbaro.addEventListener("click", handleClickBarbaro);
btArciere.addEventListener("click", handleClickArciere);
btStregone.addEventListener("click", handleClickStregone);


// abilita.addEventListener("input",function(){
//     console.log(abilita.value);
// });

startButton.addEventListener("click" ,function(){
    if (!containerBarbaro.classList.contains("nascosto")){
        champ=Barbaro;
    } else if (!containerArciere.classList.contains("nascosto")){
        champ=Arciere;
    } else if (!containerStregone.classList.contains("nascosto")){
        champ=Stregone;
    }
    console.log(champ.abilita1);
    console.log(typeof(champ.abilita1));
    btBarbaro.removeEventListener("click", handleClickBarbaro);
    btArciere.removeEventListener("click", handleClickArciere);
    btStregone.removeEventListener("click", handleClickStregone);

    spanText.textContent="Sei un soldato del reame boscoso, il Re ti ha affidato una missione importante ma che dovrai affrontare da solo: sconfiggere Smaug.";
    setTimeout(()=>{
        spanText.textContent="Per completare la tua missione dovrai attraversare le Terre di mezzo ed entrare nella Montagna solitaria e Affrontare Smaug.";
        setTimeout(()=>{
            spanText.textContent="Ti incammini… Poco dopo incontri un Troll di montagna, cosa fai?"
            if(prompt("Scegli tra\n1)"+champ.abilita1+"\n2)"+champ.abilita2)==="1"){
                setTimeout(()=>{
                    spanText.textContent="Complimenti hai vinto la battaglia";
                },3500);
            }else if(prompt("Scegli tra\n1)"+champ.abilita1+"\n2)"+champ.abilita2)==="2"){
                setTimeout(()=>{
                    spanText.textContent="Hai mancato il colpo. Game over";
                },3500);
            }
        },3500);
    },3500);

    

});































/*
function iniziaGioco() {
    var nome = prompt("Qual è il tuo nome?");
    if (nome !== null && nome !== "") {
        var risposta = prompt("Ciao " + nome + "! Sei pronto per l'avventura? (si/no)").toLowerCase();
        if (risposta === "si") {
            gioca(nome);
        } else {
            document.getElementById('output').innerHTML = "Peccato! Torna quando sarai pronto.";
        }
    } else {
        document.getElementById('output').innerHTML = "Devi inserire un nome per giocare!";
    }
}

function gioca(nome) {
    document.getElementById('output').innerHTML = "Benvenuto, " + nome + "!<br>";
    var risposta = prompt("Ti trovi in una foresta misteriosa. Davanti a te vedi un sentiero che si biforca. Vuoi prendere il sentiero di sinistra o quello di destra? (sinistra/destra)").toLowerCase();
    if (risposta === "sinistra") {
        document.getElementById('output').innerHTML += "Hai scelto il sentiero di sinistra. Prosegui il tuo viaggio...<br>";
        // Aggiungi altre situazioni e decisioni qui...
    } else if (risposta === "destra") {
        document.getElementById('output').innerHTML += "Hai scelto il sentiero di destra. Prosegui il tuo viaggio...<br>";
        // Aggiungi altre situazioni e decisioni qui...
    } else {
        document.getElementById('output').innerHTML += "Scelta non valida. Fine dell'avventura.<br>";
    }
}

document.getElementById('startButton').addEventListener('click', iniziaGioco);
*/
