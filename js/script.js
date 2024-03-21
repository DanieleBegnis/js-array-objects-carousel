//Consegna:
//Dato un array di oggetti letterali con:
//- url dell’immagine
//- titolo
//- descrizione
//Creare un carosello come nella foto allegata.
//Milestone 0:
//Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
//Milestone 1:
//Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
//Al click dell'utente sulle frecce verso alto o basso, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
//Milestone 2:
//Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.


const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];



//seleziono i contenitori delle immagini
const mainContentContainer = document.querySelector('.main-content-container');
const thumbnailContainer = document.querySelector('.thumbnail-container');
const subtitleContainer = document.querySelector('.subtitle-container');

//stampo le immagini e i thumbnail
images.forEach((game) => {
    const newImage = `
        <div class="image">
            <img src="${game.image}" alt="">               
        </div> 
    `;
    mainContentContainer.innerHTML += newImage;
    const newSubtitle = `
        <div class="subtitle">
            <h3>${game.title}</h3> 
            <p>${game.text}</p> 
        </div>    
    `;
    subtitleContainer.innerHTML += newSubtitle;
    const newThumbnail = `
        <div class="image thumbnail-image">
            <img src="${game.image}" alt="">               
        </div> 
    `;
    thumbnailContainer.innerHTML += newThumbnail;
});

//do classe active(per mostrare l'immagine) alle immagini

//creo variabile elemento selezionato
let activeImage = 0;
//prendo immagine che ha indice active item e aggiungo classe active
const allImages = document.querySelectorAll('.image');
allImages[activeImage].classList.add('active');
const allThumbnails = document.querySelectorAll('.thumbnail-image');
allThumbnails[activeImage].classList.add('active');

//do classe active con le frecce
const upArrow =document.querySelector('.fa-arrow-up');
upArrow.addEventListener('click', function() {
    document.querySelector('.image.active').classList.remove('active');
    document.querySelector('.thumbnail-image.active').classList.remove('active');
    activeImage++;
    allImages[activeImage].classList.add('active');
    allThumbnails[activeImage].classList.add('active');
});

const downArrow = document.querySelector('.fa-arrow-down');
downArrow.addEventListener('click', function() {
    document.querySelector('.image.active').classList.remove('active');
    document.querySelector('.thumbnail-image.active').classList.remove('active');
    activeImage--;
    allImages[activeImage].classList.add('active');
    allThumbnails[activeImage].classList.add('active');
});
