// Array degli utenti registrati con i loro dati
let utenti = [
    { username: 'Manuel', password: 'qwerty', iban: '12345', saldoIniziale: 1000 },
    { username: 'Simone', password: 'asdfgh', iban: '67890', saldoIniziale: 0 },
    { username: 'Tommaso', password: 'zxcvb', iban: '101112', saldoIniziale: 10000 }
  ];
  
  // Utente attualmente connesso, inizializzato a null all'inizio
  let utenteConnesso = null;
  
  // Funzione per l'accesso dell'utente
  function accedi(username, password) {
    // Scansione degli utenti per trovare la corrispondenza tra username e password inseriti
    for (let utente of utenti) {
      if (utente.username === username && utente.password === password) {
        utenteConnesso = utente; // Imposta l'utente attualmente connesso
        console.log("Benvenuto, " + utente.username + "!");
        return true; // Restituisce true se l'accesso ha avuto successo
      }
    }
    console.log("Accesso non riuscito. Verifica username e password.");
    return false; // Restituisce false se l'accesso non ha avuto successo
  }
  
  // Funzione per il menu principale dell'applicazione
  function menuPrincipale() {
    while (true) {
      let scelta = prompt("Benvenuto! Cosa vuoi fare?\n1. Accedi\n2. Esci");
      switch (scelta) {
        case "1":
          let username = prompt("Inserisci il tuo username:");
          let password = prompt("Inserisci la tua password:");
          if (accedi(username, password)) {
            menuUtente(); // Se l'accesso ha successo, mostra il menu dell'utente
          }
          break;
        case "2":
          console.log("Arrivederci!");
          return; // Esci dall'applicazione
        default:
          console.log("Scelta non valida. Riprova.");
      }
    }
  }
  
  // Funzione per il menu dell'utente connesso
  function menuUtente() {
    while (true) {
      let scelta = prompt("Benvenuto, " + utenteConnesso.username + "! Cosa vuoi fare?\n1. Deposita\n2. Preleva\n3. Bonifico\n4. Esci");
      switch (scelta) {
        case "1":
          deposita();
          break;
        case "2":
          preleva();
          break;
        case "3":
          bonifico();
          break;
        case "4":
          console.log("Arrivederci, " + utenteConnesso.username + "!");
          utenteConnesso = null; // Resetta l'utente attualmente connesso
          return; // Torna al menu principale
        default:
          console.log("Scelta non valida. Riprova.");
      }
    }
  }
  
  // Funzione per il deposito di denaro nell'account dell'utente
  function deposita() {
    let deposito = parseFloat(prompt("Inserisci l'importo che desideri depositare:"));
    if (!isNaN(deposito) && deposito > 0) {
      utenteConnesso.saldoIniziale += deposito;
      console.log("Deposito effettuato con successo. Nuovo saldo: " + utenteConnesso.saldoIniziale);
    } else {
      console.log("Importo non valido. Riprova.");
    }
  }
  
  // Funzione per il prelievo di denaro dall'account dell'utente
  function preleva() {
    let prelievo = parseFloat(prompt("Inserisci l'importo che desideri prelevare:"));
    if (!isNaN(prelievo) && prelievo > 0 && prelievo <= utenteConnesso.saldoIniziale) {
      utenteConnesso.saldoIniziale -= prelievo;
      console.log("Prelievo effettuato con successo. Nuovo saldo: " + utenteConnesso.saldoIniziale);
    } else {
      console.log("Importo non valido o saldo insufficiente. Riprova.");
    }
  }
  
  // Funzione per il bonifico di denaro ad un altro utente
  function bonifico() {
    let ibanDestinatario = prompt("Inserisci l'IBAN del destinatario:");
    let importo = parseFloat(prompt("Inserisci l'importo da bonificare:"));
    if (!isNaN(importo) && importo > 0 && importo <= utenteConnesso.saldoIniziale) {
      console.log("Bonifico di " + importo + "€ all'IBAN " + ibanDestinatario + " effettuato con successo.");
      utenteConnesso.saldoIniziale -= importo;
      console.log("Nuovo saldo: " + utenteConnesso.saldoIniziale);
      let utente = utenti.find(utente => utente.iban === ibanDestinatario);
      utente.saldoIniziale += importo;
      console.log(utente.saldoIniziale);
    } else {
      console.log("Importo non valido o saldo insufficiente. Riprova");
    }
  }
  
  // Avvia il menu principale dell'applicazione
  menuPrincipale();
  
