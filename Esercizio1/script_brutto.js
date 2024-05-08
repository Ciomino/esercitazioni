console.log("ciao")     
 let person1={
     username : 'Manuel',
     password : 'qwerty',
     iban : '12345',
     saldoIniziale : 1000
 }
 let person2={
     username : 'Simone',
     password : 'asdfg',
     iban : '67890',
     saldoIniziale : 0 
 }
 let person3={
    username : 'Tommaso',
     password : 'zxcvb',
     iban : '101112',
    saldoIniziale : 10000
 }      
// let utenti=[{username : 'Manuel',password : 'qwerty',iban : '12345',saldoIniziale : 1000},
//             {username : 'Simone',password : 'asdfgh',iban : '67890',saldoIniziale : 0},
//             {username : 'Tommaso',password : 'zxcvb',iban : '101112',saldoIniziale : 10000}];
// console.log(utenti[0].username);

console.log("Benvenuto, vuoi accedere o uscire?")
 if (prompt("Esci o Accedi")=='accedi'){
     console.log("Inserisci username e password");
     let user=prompt("Username");
     let pass=prompt("password")
     if (user==person1.username && pass==person1.password){
         console.log("Benvenuto" + person1.username);
         console.log('Vuoi depositare, prelevare o inviare un bonifico?')
         let action=prompt();
         if (action=="depositare"){
             let depo=prompt("somma da aggiungere al saldo")
             person1.saldoIniziale+=Number(depo);
             console.log("Deposito effettuato: saldo attuale " + person1.saldoIniziale)
         }else if (action=="prelevare"){
            let prel = prompt('quantita da prelevare')
             if(Number(prel)>person1.saldoIniziale){
                console.log("Il saldo disponibile e' inferiore");
                if(prompt('vuoi vedere il saldo disponibile?')=='si'){
                    console.log(person1.saldoIniziale)
                }
                if(prompt("vuoi ritentare il prelievo?")=="si"){
                    let prel = prompt('quantita da prelevare')
                    if(Number(prel)>person1.saldoIniziale){
                        console.log("Il saldo disponibile e' inferiore");
                        if(prompt('vuoi vedere il saldo disponibile?')=='si'){
                            console.log(person1.saldoIniziale)
                        }
                }
             }else{
                console.log("Arrivederci")
             }
         }
         console.log("Prelievo andato a buon fine")
         person1.saldoIniziale-=prel
         

     }else if(action=="bonifico"){
        let destinatario= prompt("Inserisci iban destinatario")
        if (destinatario===person2.iban || destinatario===person3.iban){
            let prel=prompt('denaro da inviare');
            if(Number(prel)>person1.saldoIniziale){
                console.log('saldo non disponibile');
                if(prompt("vuoi ritentare il bonifico?")=="si"){
                    let prel = prompt('denaro da inviare');
                    if(Number(prel)>person1.saldoIniziale){
                        console.log("Il saldo disponibile e' inferiore");
                        if(prompt('vuoi vedere il saldo disponibile?')=='si'){
                            console.log(person1.saldoIniziale)
                        }
                }
                
             }
        }
        if(destinatario==person2.iban){
            person2.saldoIniziale+=prel;
        }else{
            person3.saldoIniziale+=prel;
        }
        console.log("Bonifico inviato")
        person1.saldoIniziale-=prel
     }else{
        console.log("L'iban inserito non esiste")
     }
    


    }
         
        // person 2
     }else if (user==person2.username && pass==person2.password){
        console.log("Benvenuto" + person2.username);
        console.log('Vuoi depositare, prelevare o inviare un bonifico?')
         let action=prompt();
         if (action=="depositare"){
             let depo=prompt("somma da aggiungere al saldo")
             person2.saldoIniziale+=Number(depo)
             console.log("Deposito effettuato: saldo attuale " + person2.saldoIniziale)
         }else if (action=="prelevare"){
            let prel = prompt('quantita da prelevare')
             if(Number(prel)>person2.saldoIniziale){
                console.log("Il saldo disponibile e' inferiore");
                if(prompt('vuoi vedere il saldo disponibile?')=='si'){
                    console.log(person2.saldoIniziale)
                }
                if(prompt("vuoi ritentare il prelievo?")=="si"){
                    let prel = prompt('quantita da prelevare')
                    if(Number(prel)>person2.saldoIniziale){
                        console.log("Il saldo disponibile e' inferiore");
                        if(prompt('vuoi vedere il saldo disponibile?')=='si'){
                            console.log(person2.saldoIniziale)
                        }
                }
             }
         }
         console.log("Prelievo andato a buon fine")
         person2.saldoIniziale-=prel

     }else if(action=="bonifico"){
        let destinatario= prompt("Inserisci iban destinatario")
        if (destinatario==person1.iban || destinatario==person3.iban){
            let prel=prompt('denaro da inviare');
            if(Number(prel)>person2.saldoIniziale){
                console.log('saldo non disponibile');
                if(prompt("vuoi ritentare il bonifico?")=="si"){
                    let prel = prompt('denaro da inviare');
                    if(Number(prel)>person2.saldoIniziale){
                        console.log("Il saldo disponibile e' inferiore");
                        if(prompt('vuoi vedere il saldo disponibile?')=='si'){
                            console.log(person2.saldoIniziale)
                        }
                }
                
             }
        }
        if(destinatario==person2.iban){
            person1.saldoIniziale+=prel;
        }else{
            person3.saldoIniziale+=prel;
        }
        console.log("Bonifico inviato")
        person2.saldoIniziale-=prel
     }else{
        console.log("L'iban inserito non esiste")
     }
     


    }


        // person3
    }else if (user==person3.username && pass==person3.password){
        console.log("Benvenuto" + person3.username);
        console.log('Vuoi depositare, prelevare o inviare un bonifico?')
         let action=prompt();
         if (action=="depositare"){
             let depo=prompt("somma da aggiungere al saldo")
             person3.saldoIniziale+=Number(depo)
             console.log("Deposito effettuato: saldo attuale " + person3.saldoIniziale)
         }else if (action=="prelevare"){
            let prel = prompt('quantita da prelevare')
             if(Number(prel)>person3.saldoIniziale){
                console.log("Il saldo disponibile e' inferiore");
                if(prompt('vuoi vedere il saldo disponibile?')=='si'){
                    console.log(person3.saldoIniziale)
                }
                if(prompt("vuoi ritentare il prelievo?")=="si"){
                    let prel = prompt('quantita da prelevare')
                    if(Number(prel)>person3.saldoIniziale){
                        console.log("Il saldo disponibile e' inferiore");
                        if(prompt('vuoi vedere il saldo disponibile?')=='si'){
                            console.log(person3.saldoIniziale)
                        }
                }
             }
         }
         console.log("Prelievo andato a buon fine")
         person3.saldoIniziale-=prel

     }else if(action=="bonifico"){
        let destinatario= prompt("Inserisci iban destinatario")
        if (destinatario==person2.iban || destinatario==person1.iban){
            let prel=prompt('denaro da inviare');
            if(Number(prel)>person3.saldoIniziale){
                console.log('saldo non disponibile');
                if(prompt("vuoi ritentare il bonifico?")=="si"){
                    let prel = prompt('denaro da inviare');
                    if(Number(prel)>person3.saldoIniziale){
                        console.log("Il saldo disponibile e' inferiore");
                        if(prompt('vuoi vedere il saldo disponibile?')=='si'){
                            console.log(person3.saldoIniziale)
                        }
                }
                
             }
        }
        if(destinatario==person2.iban){
            person2.saldoIniziale+=prel;
        }else{
            person1.saldoIniziale+=prel;
        }
        console.log("Bonifico inviato")
        person3.saldoIniziale-=prel
     }else{
        console.log("L'iban inserito non esiste")
     }


    }

    }


     
    }else {
        console.log("Arrivederci e grazie");
 }
    
 
 
