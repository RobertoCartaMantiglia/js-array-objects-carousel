const images = [
   {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
   },
   {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
   },
   {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
   },
   {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
   },
   {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
   }
];

// CONSEGNA:
// Modifichiamo il codice dell'esercizio per renderlo funzionante con
// un array di oggetti, con una regola: non potete modificare l'array di oggetti in nessun caso.
// Dato un array di oggetti letterali con:
//  url dell’immagine
// titolo
// descrizione
// Creare un carosello.
// Milestone 0:
// Popoliamo dinamicamente il contenuto del carosello con i dati forniti dall'array di oggetti,
// dal js (dentro al nostro 'carousel-item', per capirci).
// Milestone 1:
// Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventerà visibile.
// Milestone 2:
// Aggiungiamo alla visualizzazione delle immagini anche titolo e testo relative alla singola immagine.



const wrapperImage = document.querySelector(".carousel-image");


images.forEach((slide) => {
   wrapperImage.innerHTML +=  
   `<div class = "my_carousel-item">
      <img src="${slide.image}" alt="First image">
   </div>`;
});

// creo una variabile contatore da assegnare alle img
let contatore = 0;

//prendo l'elemento con la classe che mi interessa, gli accorpo il valore del contatore e, aggiungo la classe active in modo che si veda
document.getElementsByClassName("my_carousel-item") [contatore].classList.add("active");

//richiamo il tasto prev
const previousButton = document.getElementById("previous-button");
//creo gli eventi legati ai tasti
previousButton.addEventListener("click", function(){
   //si dovrà vedere solo un'immagine per volta; bisogna ora rimuovere l'active da una img e assegnarla all'altra
   document.querySelector("div.my_carousel-item.active").classList.remove("active");
   if(contatore <= 0){
      contatore = 4;
   }else{
      contatore = contatore -1;
   }
   document.getElementsByClassName("my_carousel-item")[contatore].classList.add("active");
   // riaggiungi la classe all'immagine corrente
});

const nextButton = document.getElementById("next-button");

nextButton.addEventListener("click", function(){
   document.querySelector("div.my_carousel-item.active").classList.remove("active");

   if (contatore >= 4) {
      contatore = 0;
   } else{
      contatore = contatore +1;
   }
   document.getElementsByClassName("my_carousel-item")[contatore].classList.add("active");
});