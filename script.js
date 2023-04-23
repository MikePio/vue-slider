/*
Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Bonus:
1- al click su una thumb, visualizzare in grande l’immagine corrispondente
2- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce

Consigli del giorno:
- regola d’oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell’esercizio svolto qualche giorno fa: è già tutto pronto!
- il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l’esercizio si riduce a poche righe

*/

const {createApp} = Vue 

createApp({
    data(){
        return{
          imgTitles:[
            'Primo sfondo',
            'Secondo sfondo',
            'Terzo sfondo',
            'Quarto sfondo',
            'Quinto sfondo',
          ],
          images: [
            'img/1.jpg',
            'img/2.jpg',
            'img/3.jpg',
            'img/4.jpg',
            'img/5.jpg'
          ],
          descriptions: [
            "Un'alba sul lago. Questo sfondo cattura la bellezza mozzafiato di un lago appena svegliato dal sonno, con il sole che sorge dietro le montagne e riflette i suoi raggi dorati sulla superficie dell'acqua. Il cielo è di un blu tenue, con una leggera foschia che rende l'atmosfera leggermente misteriosa. Le nuvole sembrano pennellate di colore rosa e arancione, creando un'immagine mozzafiato.",
            "Uno sfondo mozzafiato che cattura la bellezza serena di un lago alpino. Acque cristalline e limpide si estendono all'infinito, circondate dalle cime delle montagne e dal verde intenso della natura incontaminata. La luce del sole primaverile illumina il paesaggio, creando un'atmosfera calda e accogliente.",
            "Questo sfondo ti trasporta su un pontile che finisce in un lago silenzioso e tranquillo. L'acqua è come uno specchio, riflettendo la bellezza del cielo sopra di esso. L'aria è fresca e vivificante, e la vista del paesaggio che si staglia all'orizzonte è semplicemente magnifica.",
            "Uno sfondo mozzafiato che cattura la bellezza serena di un lago alpino. Acque cristalline e limpide si estendono all'infinito, circondate dalle cime delle montagne e dal verde intenso della natura incontaminata. La luce del sole primaverile illumina il paesaggio, creando un'atmosfera calda e accogliente.",
            "Un lago incantato si apre davanti a te, circondato da alberi lussureggianti e montagne maestose. Il cielo è di un blu intenso, con nuvole bianche che fluttuano dolcemente in lontananza. L'acqua del lago è calma e placida, invitandoti a lasciarti andare e ad immergerti nella bellezza della natura."
          ],
          counter : 0,
          autoScroll: true
        }
    }, 
    
    methods:{
      nextPrev(isNext){
        // se isNext è true, incrementa il contatore delle immagini (counter) altrimenti, decrementa il contatore
        isNext ? this.counter++ : this.counter--;
        // Stessa cosa
        // if(isNext == true){
        //   this.counter++;
        // }
        // else{
        //   this.counter--;
        // }
        
        // controllo se il contatore delle immagini è uguale alla lunghezza dell'array images se sì, significa che abbiamo superato l'ultimo elemento e dobbiamo ripartire dal primo elemento
        if(this.counter == this.images.length) this.counter = 0;
        
        // controllo se il contatore delle immagini è inferiore a 0 se sì, significa che abbiamo superato il primo elemento e dobbiamo ripartire dall'ultimo elemento
        else if(this.counter < 0) this.counter = this.images.length - 1;
      },
      autoClick(){
        //* SOLUZIONE 1 arrow function MIGLIORE
        setInterval(() => {
          //* senza bloccare l'auto scroll
          // this.nextPrev(true);
          //* Con il blocco dell'auto scroll
          // se l'autoScroll è true allora nextPrev(true)
          if (this.autoScroll) this.nextPrev(true);
          }, 3000)
        // SOLUZIONE 2 senza arrow function
          // setInterval(function() {
          //   this.nextPrev(true);
          // }.bind(this), 3000);        
      }
    },

    mounted(){
      // quando la pagina è montata viene richiamata la funzione
      this.autoClick()
    }

}).mount('#app')
















































