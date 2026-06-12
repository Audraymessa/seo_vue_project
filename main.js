const Home = {
  template: `
         <section class="bg-blue text-white  py-5">
        <div class="container">
          <div class="mb-5 ">
            <h2>Cos'è la SEO?</h2>
            <p>
              La SEO <strong>(Search Engine Optimization)</strong>, o
              ottimizzazione per i motori di ricerca, è un insieme di tecniche
              volte a migliorare il posizionamento di un sito web nei risultati
              dei motori di ricerca, come Google. L'obiettivo principale della
              SEO è posizionare il tuo sito web in cima ai risultati di ricerca
              per parole chiave strategiche. Questo ti permette di attrarre
              traffico qualificato e organico al tuo sito.
            </p>
          </div>

          <div class="mb-5">
            <h2>Ecco i 5 principali vantaggi di una strategia SEO:</h2>
            <ul>
              <li>
                <strong>Maggiore visibilità:</strong> il tuo sito compare tra i
                primi risultati di ricerca di Google.
              </li>
              <li>
                <strong>Traffico mirato:</strong> attiri visitatori interessati
                ai tuoi contenuti, prodotti e servizi.
              </li>
              <li>
                <strong>Pertinenza ottimale:</strong> le tue pagine rispondono
                in modo preciso alle query di ricerca degli utenti.
              </li>
              <li>
                <strong>Miglior posizionamento:</strong> guadagni posizioni per
                le tue parole chiave prioritarie.
              </li>
              <li>
                <strong>Prestazioni tecniche:</strong> il tuo sito diventa più
                veloce, meglio strutturato e più accessibile.
              </li>
            </ul>
          </div>

          <div class="mb-5">
            <h2>La SEO si basa su 3 pilastri</h2>
            <ul>
              <li>
                <strong>Ottimizzazione tecnica:</strong> include la struttura
                del sito, la sua velocità di caricamento, la sua compatibilità
                con i dispositivi mobili, ecc.
              </li>
              <li>
                <strong>Ottimizzazione dei contenuti:</strong> il contenuto deve
                essere di alta qualità, originale, pertinente alle parole chiave
                target e ben strutturato.
              </li>
              <li>
                <strong>Creazione di link (netlinking):</strong> i link
                provenienti da altri siti web rafforzano la credibilità del tuo
                sito agli occhi dei motori di ricerca.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="container py-5">
        <div class="row g-4">
          <p>
            La programmazione definisce la base strutturale su cui i motori di
            ricerca valutano un sito. Questo ambito prende il nome di
            <strong>Technical SEO</strong>. I crawler di Google (come Googlebot)
            non "vedono" il sito visivamente come un essere umano, ma leggono ed
            elaborano il codice sorgente. Se il codice è strutturato in modo
            inefficiente, il contenuto non verrà posizionato correttamente.
          </p>
          <h2 class="h2 texte-blue fw-bold mb-3">
            Ecco i pilastri in cui il codice impatta direttamente il
            posizionamento:
          </h2>

          <article class="col-md-4">
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body">
                <h2 class="h6 texte-blue fw-bold mb-3">
                  1. Rendering e Framework JavaScript
                </h2>
                <p class="card-text text-dark">
                  Questo è l'aspetto più critico nello sviluppo moderno. Quando
                  si costruiscono interfacce con framework reattivi come Vue.js
                  o Svelte, si creano spesso Single Page Applications (SPA). In
                  un approccio puramente Client-Side Rendering (CSR), il server
                  invia un file HTML quasi vuoto e il DOM viene generato
                  dinamicamente da JavaScript.
                </p>
                <p class="card-text text-dark">
                  I bot dei motori di ricerca hanno risorse di calcolo limitate
                  (Crawl Budget) e spesso non attendono l'esecuzione di script
                  JS complessi o chiamate API esterne. Se il crawler analizza la
                  pagina prima che JavaScript abbia "montato" l'interfaccia,
                  indicizzerà una pagina vuota. L'implementazione di Server-Side
                  Rendering (SSR) o Static Site Generation (SSG) risolve questo
                  ostacolo fornendo al bot un HTML già compilato con i dati.
                </p>
              </div>
            </div>
          </article>

          <article class="col-md-4">
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body">
                <h2 class="h6 texte-blue fw-bold mb-3">2. Semantica HTML</h2>
                <p class="card-text text-dark">
                  I tag HTML comunicano la gerarchia e il significato dei dati
                  all'algoritmo.
                </p>
                <ul class="text-dark">
                  <li class="mb-2">
                    L'uso rigoroso di <code>&lt;h1&gt;</code> per i titoli
                    primari, seguiti da <code>&lt;h2&gt;</code> e
                    <code>&lt;h3&gt;</code>, definisce l'albero semantico
                    dell'informazione.
                  </li>
                  <li>
                    L'utilizzo di tag come <code>&lt;nav&gt;</code>,
                    <code>&lt;article&gt;</code>, <code>&lt;header&gt;</code> e
                    <code>&lt;main&gt;</code> (al posto di generici
                    <code>&lt;div&gt;</code>) permette ai bot di isolare il
                    contenuto di valore dal rumore strutturale (come menu o piè
                    di pagina).
                  </li>
                  <li>
                    L'attributo <strong>alt</strong> per le immagini I motori di
                    ricerca non hanno gli occhi: non possono "vedere" una foto.
                    L'unico modo in cui Google capisce cosa c'è in un'immagine è
                    leggendo il suo testo alternativo.Esempio:
                    <code
                      >&lt;img src="/images/grafico-seo.jpg" alt="grafico
                      SEO"&gt;</code
                    >. I motori di ricerca non "vedono" le foto, ma leggono
                    questo testo per indicizzarle e favorire l'accessibilità.
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="col-md-4">
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body">
                <h2 class="h6 texte-blue fw-bold mb-3">
                  3. Web Performance (Core Web Vitals)
                </h2>
                <p class="card-text text-dark">
                  Google utilizza parametri di performance tecnica come fattore
                  di ranking ufficiale. Questi dipendono interamente
                  dall'ottimizzazione del codice:
                </p>
                <ul class="text-dark">
                  <li class="mb-2">
                    LCP (Largest Contentful Paint): La velocità di
                    renderizzazione dell'elemento più grande. Dipende dalla
                    minificazione del CSS, dall'ottimizzazione delle immagini e
                    dalla rimozione di JavaScript bloccante.
                  </li>
                  <li class="mb-2">
                    CLS (Cumulative Layout Shift): La stabilità visiva.
                    L'inserimento asincrono di dati (ad esempio, elementi
                    generati tramite <code>fetch</code> da un JSON) senza aver
                    pre-dichiarato le dimensioni dei contenitori causa
                    spostamenti di layout penalizzati da Google.
                  </li>
                  <li>
                    INP (Interaction to Next Paint): Misura la latenza e
                    l'efficienza degli script JavaScript nel rispondere alle
                    interazioni dell'utente.
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>
    `
};

const Approfondimenti = {
  template: `
   <section class="bg-blue text-white py-5">
            <div class="container ">
                <div class="container mb-5">
                    <h2 class="fw-bold text-center mb-3">Strategie Avanzate e Tecniche SEO</h2>
                    <p>Per ragguingere l'obiettivo di vedere il nostro sito visibile in primo posto nelle recommandazione, la SEO si divide in 3 pilastri fondamentali. Se ne manca anche solo uno, il sito farà fatica a posizionarsi. Vediamoli nel dettaglio.</p>
                </div>
            
                <div class="container mt-4">
                    <h2>I 3 Pilastri della SEO</h2>
                </div>
                <div class="container mt-4">
                    <h3>SEO Tecnica</h3>
                    <p>
                        È la struttura invisibile del sito. 
                        Si occupa di garantire che i motori di ricerca possano accedere, scansionare e indicizzare le pagine del vostro sito senza errori, e che l'esperienza dell'utente sia fluida e veloce.
                    </p>
                    <p> 
                        <strong>Cosa fa:</strong> Ottimizza la velocità, la sicurezza (HTTPS), la leggibilità del codice e la stabilità sui telefoni cellulari.
                         Possiamo spiegare questo concetto utilizzando l'illustrazione qui sotto, che mostra chiaramente come si svolge.
                    </p>
                    <img src="img/SEO Tecnica.png" alt="Spiegazione della seo tecnica" class="img-fluid">
                </div>
                <div class="container mt-4">
                    <h3>SEO On-PAGE </h3>
                    <p>
                        È tutto ciò che si trova direttamente sulle vostre pagine web. Riguarda sia la qualità dei testi che create, sia il modo in cui formattate il codice HTML (titoli, immagini, tag) per far capire a Google l'argomento esatto del vostro sito.
                    </p>
                    <p>
                        <strong>Cosa fa:</strong>Ottimizza le parole chiave (Keywords), i titoli (h1, h2), i testi, le immagini e i link interni tra le pagine.
                    </p>
                    <img src="img/SEO On-page.png" alt="Spiegazione della seo On-page" class="img-fluid">
                </div>
                <div class="container mt-4">
                    <h3>SEO Off-PAGE </h3>
                    <p>
                        È tutto ciò che avviene al di fuori del vostro sito web. 
                        Serve a dimostrare a Google che il vostro progetto è autorevole, affidabile e popolare nel resto di Internet attraverso il "passaparola" digitale.
                    </p>
                    <p>
                        <strong>Cosa fa:</strong> Si concentra sulla Link Building (ricevere link da altri siti), sulle menzioni del vostro brand e sulla popolarità social.
                    </p>
                    <img src="img/SEO Off-page.png" alt="Spiegazione della seo Off-page" class="img-fluid">
                </div>
                <div class="container mt-4" role="region">
                  <h3>L'impatto dell'accessibilità sulla SEO</h3>
                  <p>
                    Nel panorama digitale odierno, l'accessibilità non è più soltanto una buona pratica o un requisito etico: è un vero e proprio fattore strategico per la visibilità online. 
                    L'intersezione tra accessibilità web e ottimizzazione per i motori di ricerca (SEO) si fa sempre più concreta, a testimonianza di un'evoluzione del web orientata all'inclusività e alla qualità dell'esperienza utente.
                  </p>
                  <p>
                  Ecco come le pratiche che aiutano gli utenti con disabilità migliorano direttamente il nostro posizionamento su Google:
                  </p>
                  <ol class="list-unstyled d-flex flex-column gap-4">
                    <li class="card p-3 shadow-sm border-0 bg-light">
                      <h4 class="fs-5 text-dark mb-2"> 1. Testo Alternativo delle immagini(Alt attribute) </h4>
                      <p class="mb-0 text-body">
                        Per l'Accessibilità: Lo screen reader legge il testo alternativo per descrivere l'immagine a un utente non vedente.
                      </p>
                      <p class="mb-0 text-body">
                        Per la SEO: Google non può "vedere" il contenuto visivo di una foto. Usa il testo alt per capire cosa c'è nell'immagine e indicizzarla correttamente su Google Immagini.
                      </p>
                    </li>
                    <li class="card p-3 shadow-sm border-0 bg-light">
                      <h4 class="fs-5 text-dark mb-2"> 2. Struttura dei titoli (h1, h2, h3 atributes) </h4>
                      <p class="mb-0 text-body">
                        Per l'Accessibilità: Gli utenti ipovedenti usano i titoli per saltare da una sezione all'altra della pagina e capire la gerarchia dei contenuti senza dover leggere tutto.
                      </p>
                      <p class="mb-0 text-body">
                        Per la SEO: Google usa l'ordine logico dei titoli (un solo H1, seguito da H2 e H3) per comprendere l'argomento principale della pagina e l'importanza dei vari sotto-argomenti.
                      </p>
                    </li>
                    <li class="card p-3 shadow-sm border-0 bg-light">
                      <h4 class="fs-5 text-dark mb-2"> 3. Testo dei link chiaro (No al "Clicca qui") </h4>
                      <p class="mb-0 text-body">
                        Per l'Accessibilità: Sentire uno screen reader che dice "Clicca qui, Clicca qui, Clicca qui" è frustrante perché non dà contesto. I link devono essere descrittivi (es. "Scarica il report SEO 2026").
                      </p>
                      <p class="mb-0 text-body">
                        Per la SEO: Google usa il testo del link (anchor text) per capire di cosa tratta la pagina di destinazione. Un anchor text descrittivo distribuisce il "valore SEO" in modo molto più efficace.
                      </p>
                    </li>
                    <li class="card p-3 shadow-sm border-0 bg-light">
                      <h4 class="fs-5 text-dark mb-2"> 4. Gli attributi ARIA (aria-current, aria-label) </h4>
                      <p class="mb-0 text-body">
                        Per l'Accessibilità: Come abbiamo visto per il nostro menu, informano lo screen reader su quale sia la pagina attiva o sul ruolo di un elemento (es. aria-label="Navigation principale").
                      </p>
                      <p class="mb-0 text-body">
                        Per la SEO: Aiutano i bot di Google a comprendere l'architettura tecnica del tuo sito, riducendo gli errori di scansione e migliorando l'indicizzazione delle parti fondamentali (come i menu).
                      </p>
                    </li>
                  </ol>
                  
                </div>
            </div>
        </section>
  `
};


const Analisi = {
  data() {
    return {
      keywordList: [],
      loading: true,
      error: false
    };
  },
  methods: {
    getLevelBadge(livello) {
      if (livello === 'Base') return 'bg-success';
      if (livello === 'Intermedio') return 'bg-warning text-dark';
      return 'bg-danger text-white';
    }
  },
  mounted() {
    fetch('seo-data.json')
      .then(response => {
        if (!response.ok)  throw new Error();
        return response.json();
      })
      .then(data => {
        this.keywordList = data;
        this.loading = false;
      })
      .catch(() => {
        this.error = true;
        this.loading = false;
      });
  },
  template: `
   <section class="container-fluid animate_animated animate_fadeIn py-5">
            <div class="row ">
                <div class="col-12 text-center ">
                    <h2 class="texte-orange ">Analisi Metriche SEO</h2>
                    <p>Esplora il nostro glossario interattivo con righe e colonne evidenziate.</p>
                </div>
            </div>

            <div v-if="loading" class="text-center p-5 ">
                <div class="spinner-border text-warning" role="status"></div>
                <p class="mt-2">Caricamento dei 30 termini in corso...</p>
            </div>

            <div v-if="error" class="alert alert-danger shadow-sm border-start border-4 border-danger">
                <strong>Attenzione:</strong> Impossibile caricare il file JSON dei dati.
            </div>

            <div v-if="!loading && !error" class="table-responsive shadow-lg rounded">
                <table class="table table-bordered table-seo-analisi mb-0">
                    <thead>
                        <tr>
                            <th scope="col" class="py-3">Termine SEO</th>
                            <th scope="col" class="py-3">Spiegazione Dettagliata</th>
                            <th scope="col" class="py-3 text-center">Livello Difficoltà</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in keywordList" :key="item.termine">
                            <td class="fw-bold text-dark px-3" style="width: 20%;">
                                {{ item.termine }}
                            </td>
                            <td class="text-dark px-3" style="width: 60%;">
                                {{ item.definizione }}
                            </td>
                            <td class="text-center px-3" style="width: 20%;">
                                <span class="badge rounded-pill p-2 px-3 shadow-sm" :class="getLevelBadge(item.livello)">
                                    {{ item.livello }}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
  </section>
  `
};


const Workspace = {
  data() {
    return {
      // Array principale che conterrà i tuoi termini SEO
      termini: [],
      
      // Variabili collegate agli input del form per l'aggiunta
      inputKeyword: '',
      inputDescrizione: '',
      inputLivello: 'Base' // Valore di default pre-selezionato
    }
  },

  methods: {
    salvaDatiNelLocalStorage() {
      // Salva l'array aggiornato nella memoria del browser
      const terminiString = JSON.stringify(this.termini);
      localStorage.setItem('glossarioSEO', terminiString);
    },

    aggiungiTermine() { 
      // Controlla che i campi non siano vuoti prima di aggiungere
      if(this.inputKeyword.trim() === '' || this.inputDescrizione.trim() === '') {
          alert("Inserisci sia la keyword che la descrizione!");
          return;
      }

      // Aggiunge il nuovo termine all'array
      this.termini.push({ 
        keyword: this.inputKeyword,
        descrizione: this.inputDescrizione,
        livello: this.inputLivello
      });
      
      this.salvaDatiNelLocalStorage();

      // Pulisce i campi del form dopo l'inserimento
      this.inputKeyword = '';
      this.inputDescrizione = '';
      this.inputLivello = 'Base';
    },

    modifica(index) {
      // Richiede i nuovi dati all'utente mostrando quelli vecchi come suggerimento
      const nuovaKeyword = prompt("Modifica Keyword:", this.termini[index].keyword);
      const nuovaDescrizione = prompt("Modifica Descrizione:", this.termini[index].descrizione);
      const nuovoLivello = prompt("Modifica Livello (Base, Intermedio, Avanzato):", this.termini[index].livello);
      
      // Aggiorna solo se l'utente non ha cliccato "Annulla"
      if(nuovaKeyword !== null) this.termini[index].keyword = nuovaKeyword;
      if(nuovaDescrizione !== null) this.termini[index].descrizione = nuovaDescrizione;
      if(nuovoLivello !== null) this.termini[index].livello = nuovoLivello;

      this.salvaDatiNelLocalStorage();
    },
      
    elimina(index) {
      // Chiede conferma prima di cancellare
      if(confirm("Sei sicuro di voler eliminare questo termine?")) {
          this.termini.splice(index, 1);
          this.salvaDatiNelLocalStorage();
      }
    },

    caricaDatiDalLocalStorage() {
      const datiSalvati = localStorage.getItem('glossarioSEO');
      if (datiSalvati) {
        this.termini = JSON.parse(datiSalvati);
      } else {
        // Se non c'è nulla salvato, crea un array vuoto
        this.termini = [];
      }
    }
  },

  mounted() {
    // Appena si apre la pagina Workspace, carica i dati salvati
    this.caricaDatiDalLocalStorage();
  },
  template: `
    <section class="container py-5">
      <h2 class="fw-bold text-center mb-4 ">Workspace: Gestione Glossario</h2>
      
      <form class="w-75 mx-auto bg-light p-4 rounded shadow-sm border border-2 mb-5" @submit.prevent="aggiungiTermine">
        <h4 class="mb-3 texte-blue">Aggiungi nuovo termine</h4>
        
        <div class="mb-3">
          <label for="keyword" class="form-label fw-bold">Keyword:</label>
          <input type="text" class="form-control" id="keyword" placeholder="Es. Backlink" v-model="inputKeyword" required>
        </div>
        
        <div class="mb-3">
          <label for="descrizione" class="form-label fw-bold">Descrizione:</label>
          <textarea class="form-control" id="descrizione" rows="2" placeholder="Inserisci la definizione..." v-model="inputDescrizione" required></textarea>
        </div>
        
        <div class="mb-3">
          <label for="livello" class="form-label fw-bold">Livello di difficoltà:</label>
          <select class="form-select" id="livello" v-model="inputLivello">
            <option value="Base">Base</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzato">Avanzato</option>
          </select>
        </div>
        
        <button type="submit" class="btn btn-primary w-100 bg-orange border-0 shadow-sm">Aggiungi al Glossario</button>
      </form>

      <h4 class="mb-3 texte-blue">Termini Salvati</h4>
      <div class="table-responsive shadow-sm rounded">
        <table class="table table-striped table-hover align-middle mb-0">
          <thead class="table-dark">
            <tr>
              <th>N°</th>
              <th style="width: 20%;">Keyword</th>
              <th style="width: 40%;">Descrizione</th>
              <th style="width: 15%;">Livello</th>
              <th style="width: 25%; text-align: center;">Azioni</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="termini.length === 0">
              <td colspan="5" class="text-center text-muted py-4">Nessun termine inserito. Inizia ad aggiungerne uno!</td>
            </tr>
            
            <tr v-for="(termine, index) in termini" :key="index">
              <td class="fw-bold">{{ index + 1 }}</td>
              <td class="fw-bold text-dark">{{ termine.keyword }}</td>
              <td>{{ termine.descrizione }}</td>
              <td>
                 <span class="badge bg-secondary">{{ termine.livello }}</span>
              </td>
              <td class="text-center">
                <button type="button" class="btn btn-sm btn-outline-primary me-2" @click="modifica(index)">✏️ Modifica</button>
                <button type="button" class="btn btn-sm btn-outline-danger" @click="elimina(index)">🗑️ Elimina</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `
};


const routes = [
  { path: '/', component: Home },
  { path: '/approfondimento', component: Approfondimenti },
  { path: '/analisi', component: Analisi },
  { path: '/workspace', component: Workspace }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});

const app =Vue.createApp({});
app.use(router);
app.mount('#app');
