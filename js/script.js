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



// recupero i bottoni dal index 
const previousButton = document.querySelector(".previous");

const nextButton = document.querySelector(".next");

const wrapperImage = document.querySelector(".carousel-image");
console.log(wrapperImage);


//creo un altro array dove salvare le imgs
const saveImg = [];


for (let i=0; i<images.length; i++){

   const newDiv = document.createElement("div");
   wrapperImage.append(newDiv);
   newDiv.classList.add("my_carousel-item");

   newDiv.innerHTML =  
   `<img src= "./${images[i].image}"> `;

   saveImg.push(newDiv);

}
console.log(saveImg);

// creo una variabile contatore da assegnare
let contatore = 0;

//creo gli eventi legati ai tasti

previousButton.addEventListener("click", function(){
   
   contatore --; 
});



nextButton.addEventListener("click", function(){
  contatore ++;
});