import pages from './storage';

export default function thirdPage(informationContainer, informationHeader, informationDescription, pageNumber){
    let note = document.getElementsByClassName('advantage-note')[0];
    let image = document.getElementsByClassName('image')[0];
    let advantage = document.getElementsByClassName('advantage')[0];

    if (note){
        note.parentNode.removeChild(note);
    }
    //delete this because we may have previous image and note and advantage
    if (image){
        image.parentNode.removeChild(image);
    }

    if (advantage){
        advantage.parentNode.removeChild(advantage);
    }

    informationHeader.style.width = '45%';
    informationHeader.style.fontSize = '35px';
    informationHeader.style.marginTop = '5%';
    informationDescription.style.position = 'absolute';
    informationDescription.style.top = '15%';
    informationDescription.style.width = '70%';
    informationDescription.style.fontWeight = '900';
    informationDescription.style.fontSize = '35px';
    informationContainer.style.marginLeft = '5%';
    informationContainer.style.marginRight = '20%';
    informationContainer.style.marginTop = '15%';
    informationContainer.style.padding = '0';

    if (window.matchMedia('(max-width: 1400px)').matches){
        informationHeader.style.fontSize = '25px';
        informationDescription.style.fontSize = '25px';
    }

    createImage(informationContainer, pageNumber);
    createAdvantage(informationHeader, pages[pageNumber].advantage);
    pageNumber === '2' ? createNote(informationContainer, pages[pageNumber].note) : false;
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

function createAdvantage(informationHeader, advantageContent){
    let advantage = document.createElement('p');

    advantage.classList.add('advantage');
    advantage.setAttribute('data-aos', 'fade-up');
    advantage.setAttribute('data-aos-duration', 1500);
    advantage.textContent = advantageContent;
    informationHeader.parentNode.insertBefore(advantage, informationHeader);
}