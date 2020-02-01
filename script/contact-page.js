let contactInformation = document.createElement('div');
let informationContainer = document.createElement('span');
let company = document.createElement('p');
let adress = document.createElement('p');
let phoneContainer = document.createElement('p');
let phoneCode = document.createElement('p');
let phoneSecretary = document.createElement('p')
let phoneTransport = document.createElement('p');
let mailHeader = document.createElement('p');
let email = document.createElement('p');
let formContainer = document.createElement('span');

export default function contactPage(mainContainer, pages, pageNumber){
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

    mainContainer.style.marginLeft = '0';
    mainContainer.style.marginRight = '0';
    mainContainer.style.marginTop = '0';

    //adding stylings
    contactInformation.classList.add('contact-information');
    informationContainer.classList.add('contact-information-container');
    formContainer.classList.add('form-container');
    company.classList.add('company');
    adress.classList.add('adress');
    phoneContainer.classList.add('phone-container');
    phoneCode.classList.add('phone');
    phoneSecretary.classList.add('phone');
    phoneTransport.classList.add('phone');
    mailHeader.classList.add('mail-header');
    email.classList.add('email');

    //adding the content
    company.textContent = pages[pageNumber]['company'];
    adress.textContent = pages[pageNumber]['adress'];
    phoneCode.textContent = pages[pageNumber]['phoneCode'];
    phoneSecretary.textContent = pages[pageNumber]['phoneSecretary'];
    phoneTransport.textContent = pages[pageNumber]['phoneTransport'];
    mailHeader.textContent = pages[pageNumber]['mailHeader'];
    email.textContent = pages[pageNumber]['email'];

    //appending all the elements
    phoneContainer.appendChild(phoneCode);
    phoneContainer.appendChild(phoneSecretary);
    phoneContainer.appendChild(phoneTransport);
    informationContainer.appendChild(company);
    informationContainer.appendChild(adress);
    informationContainer.appendChild(phoneContainer);
    informationContainer.appendChild(mailHeader);
    informationContainer.appendChild(email);
    contactInformation.appendChild(informationContainer);
    contactInformation.appendChild(formContainer);
    mainContainer.appendChild(contactInformation);
}