import pages from './storage';

export default function thirdPage(informationContainer, informationHeader, informationDescription, pageNumber){
    informationContainer.style.marginTop = '20%';
    informationHeader.style.width = '50%';
    informationHeader.style.fontSize = '50px';
    informationDescription.style.position = 'absolute';
    informationDescription.style.top = '15%';
    informationDescription.style.width = '70%';
    informationDescription.style.fontWeight = '900';
    informationDescription.style.fontSize = '35px';

    createImage(informationContainer, pageNumber);
    pageNumber === '2' ? createNote(informationContainer, pages[pageNumber].note) : console.log('smth went wrong!');
}

function createImage(informationContainer, pageNumber){
    let image = document.createElement('div');

    image.classList.add('advantage-'+pageNumber);
    image.classList.add('image');
    image.setAttribute('data-aos', 'fade-up');
    image.setAttribute('data-aos-duration', 1500);
    image.setAttribute('data-aos-delay', 600);
    informationContainer.appendChild(image);
}

function createNote(informationContainer, noteContent){
    let note = document.createElement('p');

    note.classList.add('advantage-note');
    note.setAttribute('data-aos', 'fade-down');
    note.setAttribute('data-aos-duration', 1500);
    note.setAttribute('data-aos-delay', 400);
    note.textContent = noteContent;
    informationContainer.appendChild(note);
}