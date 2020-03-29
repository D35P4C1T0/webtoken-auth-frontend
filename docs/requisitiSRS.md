# DOCUMENTO DI SPECIFICA DEI REQUISITI SOFTWARE

### Tabella contenuti

1. Introduzione

   1. Propositi

   2. Obiettivi

   3. Definizioni, acronimi e abbreviazioni

   4. Riferimenti

2. Descrizione generale

   1. Prospettive del prodotto

   2. Funzionalità del prodotto

   3. Caratteristiche utente

   4. Vincoli generali

   5. Assunzioni e dipendenze

3. Requisiti specifici

   1. Interfaccia utente

   2. Requisiti backend

   3. Requisiti frontend

---

1. **Introduzione**

   1. Propositi

      Il proposito di questo documento è quello di specificare i requisiti del sistema "MaterialLogin™️" per facilitarne la realizzazione.
      Questo documento è stato scritto seguendo le indicazioni contenute nel documento “IEEE Recommended Practice for Software Requirements Specifications” avente riferimento IEEEStd 830-1993 (Revision of IEEE Std 830-1984).

   2. Obiettivi

      Si desidera fornire una web app, o meglio un servizio che permetta di effettuare l'identificazione dell'utente nell'ambito di una web app, tramite l'utilizzo di un database contenente i dati degli user registrati.

   3. Definizioni, acronimi e abbreviazioni

      Richiesta http: interrogazione di un server da parte di un client per mezzo del protocollo http.

      Risposta http: messaggio inviato al client da parte di un server in seguito ad un'interrogazione del server.

      GET: tipologia di richiesta http, permette di richiedere una determinata risorsa o collezione.

      POST: tipologia di richiesta http, permette di inserire una risorsa o collezione nel server/database.

   4. Riferimenti

      nessuno.

---

2.  **Descrizione generale**

    1.  Prospettive del prodotto

        Il sistema informatico "MaterialLogin™️" è creato per essere integrato in qualsiasi tipo di applicazione web che necessiti di un servizio di login. Questo progetto infatti può essere visto come un modulo informatico.

    2.  Funzionalità del prodotto

        Il sistema informatico MaterialLogin™️ deve:

        - permettere la creazione di un account da parte del l'user;
        - permettere l'accesso al servizio dell'applicazione (per ora una semplice pagina d'esempio);
        - permettere al gestore di abilitare gli account tramite dei token di validità a tempo;

    3.  Caratteristiche utente

        L’utente a cui è rivolto il nostro prodotto è chiunque necessiti di un servizio che effettui il login in ambito web.

    4.  Vincoli generali

        Il sistema non presenta vincoli di particolare importanza tranne appunto la durata del token di validità.

    5.  Assunzioni e dipendenze

        Il sistema non presenta assunzioni e dipendenze.

---

3. **Requisiti specifici**

   1. Interfaccia utente

      L'interfaccia utente è composta sostanzialmente da tre pagine:

      - la prima consente il sign-up ad una ipotetica web app;
      - la seconda consente il log-in ad una ipotetica applicazione;
      - la terza è una pagina d'esempio a cui accede l'user in seguito al log-in;

      Nella prima pagina sono presenti tre campi di testo e due tasti. I due pulsanti permettono di seguire due diverse strade, quella del primo accesso, in seguito al sign-up, e quella dell'accesso di un user abituale.
      Utilizzando il primo tasto e completando i tre campi (username, email, password) si completerà l'iscrizione al servizio e si accederà ad esso per la prima volta.
      Utilizzando il secondo pulsante, senza il bisogno di completare i tre campi, si accederà ad una pagina di log-in contenente solo due campi, username e password.
      La terza pagina è comune per entrambi i passi precedenti e corrisponde ad una sezione personale dell'utente che simula in questo caso un'applicazione web che necessiti di un'autenticazione.

   2. Requisiti backend

      Il backend di questo servizio è realizzato in Node.js, un runtime basato su JavaScript 8 capace di gestire molteplici richieste asincrone contemporaneamente. Questa struttura del modulo permette di controllare le varie richieste di log-in e sign-up appoggiandosi su di un database contenente i dati degli user registrati sul servizio.
      In particolare questo database consiste in un array di oggetti json, contenenti ognuno username, email e password.
      Durante le operazioni di sign-up e login la password inserita nelle pagine adibite all'accesso al servizio verrà passata, insieme agli altri dati, in un file json al backend che effettuerà la funzione hash su di essa.

   3. Requisiti frontend

      Il frontend di quest'applicazione è realizzato dal punto di vista strutturale in React, una libreria di JavaScript, mentre è stata utilizzata la piattaforma web Bootstrap per la realizzazione dell'interfaccia utente.
      Questa parte del servizio funziona tramite le richieste e le risposte del protocollo http tra il client, ovvero la pagina dell'user, e il server, ovvero il backend.
      Nel momento in cui l'user deciderà di effettuare il sign-up i dati verranno inviati tramite una POST al server all'uri ./users, creando un'istanza user all'interno della collezione, il server dal backend risponderà con un pacchetto che conterrà tra le varie informazioni il token di accesso al servizio che abiliterà l'account fino al perdurare di esso.
      Nel momento in cui l'user tenterà di effettuare il log-in i dati verranno anch'essi iniati al server tramite una POST, in questo caso l'uri di interrogazione sarà la seguente ./users/"username", il backend effettuerà poi un controllo tra la password della richiesta e il dato registrato nel database. Effettuata questo controllo invierà poi al client il token di accesso all'area personale dell'utente.
