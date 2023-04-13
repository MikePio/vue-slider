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
          counter : 0
        }
    }, 
    
    methods:{
      nextPrev(isNext){
        isNext ? this.counter++ : this.counter--;
        
        if(this.counter == this.images.length) this.counter = 0;
        else if(this.counter < 0) this.counter = this.images.length - 1;
      }
    }

}).mount('#app')
















































