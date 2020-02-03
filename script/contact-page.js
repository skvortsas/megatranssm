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
let formNote = document.createElement('p');
let nameField = document.createElement('input');
let phoneField = document.createElement('input');
let emailField = document.createElement('input');
let sendButton = document.createElement('button');

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

    //adding contact information(left side)
    addContactInformation(pages, pageNumber);
    //adding form for contacting
    addFormContent(pages, pageNumber);

    mainContainer.style.marginLeft = '0';
    mainContainer.style.marginRight = '0';
    mainContainer.style.marginTop = '0';

    //merging all together
    contactInformation.appendChild(informationContainer);
    contactInformation.appendChild(formContainer);
    mainContainer.appendChild(contactInformation);
}

function addFormContent(pages, pageNumber){
    //adding stylings
    formNote.classList.add('form-note');
    nameField.classList.add('form-input');
    phoneField.classList.add('form-input');
    emailField.classList.add('form-input');
    sendButton.classList.add('submit-button');

    //adding the content
    formNote.textContent = pages[pageNumber].formNote;
    nameField.placeholder = 'Имя';
    vanishPlaceholder(nameField, 'Имя');
    phoneField.placeholder = 'Телефон';
    vanishPlaceholder(phoneField, 'Телефон');
    emailField.placeholder = 'E-mail';
    vanishPlaceholder(emailField, 'E-mail');
    sendButton.textContent = 'Отправить';

    //append all elements
    formContainer.appendChild(formNote);
    formContainer.appendChild(nameField);
    formContainer.appendChild(phoneField);
    formContainer.appendChild(emailField);
    formContainer.appendChild(sendButton);
}

function vanishPlaceholder(element, placeholderContent){
    element.onfocus = () => {
        element.placeholder = '';
    };

    element.onblur = () => {
        element.placeholder = placeholderContent;
    };
}

function addContactInformation(pages, pageNumber){
    //adding stylings
    contactInformation.classList.add('contact-information');
    contactInformation.setAttribute('data-aos', 'fade-up');
    contactInformation.setAttribute('data-aos-duration', 1000);
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
}