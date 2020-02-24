import toastr from 'toastr';

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
let formContainer = document.createElement('form');
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
    mainContainer.style.padding = '0 5%';

    //merging all together
    contactInformation.appendChild(informationContainer);
    contactInformation.appendChild(formContainer);
    mainContainer.appendChild(contactInformation);
}

function addFormContent(pages, pageNumber){
    let phoneReg = /^[+]*[7,8]?[(]*[0-9]{0,4}[)]*[-\s\./0-9]{7,11}$/;
    //adding stylings
    formNote.classList.add('form-note');
    nameField.classList.add('form-input');
    phoneField.classList.add('form-input');
    emailField.classList.add('form-input');
    sendButton.classList.add('submit-button');

    //adding the content
    formNote.textContent = pages[pageNumber].formNote;
    nameField.placeholder = 'Имя';
    nameField.autocomplete = 'off';
    nameField.name = 'name';
    vanishPlaceholder(nameField, 'Имя');
    nameField.addEventListener('focusout', () => {
        if (nameField.value !== ''){
            nameField.style.borderColor = 'green';
        } else {
            nameField.style.borderColor = 'gray';
        }
    });
    phoneField.placeholder = 'Телефон';
    phoneField.type = 'phone';
    phoneField.name = 'phone';
    phoneField.autocomplete = 'off';
    vanishPlaceholder(phoneField, 'Телефон');
    phoneField.addEventListener('focusout', () => {
        if (!phoneValidation(phoneField.value, phoneReg) && phoneField.value !== ''){
            phoneField.style.borderColor = 'red';
        } else {
            phoneField.style.borderColor = 'green';
        }
    });
    emailField.placeholder = 'E-mail';
    emailField.type = 'email';
    emailField.name = 'mail';
    emailField.autocomplete = 'off';
    vanishPlaceholder(emailField, 'E-mail');
    sendButton.textContent = 'Отправить';

    formContainer.onsubmit = event => {
        event.preventDefault();
        sendButton.disabled = true;

        let inputs = document.getElementsByClassName('form-input');
        let fd = new FormData();
        toastr.options = {
            "closeButton": true,
            "progressBar": true,
            "preventDuplicates": true,
            "positionClass": "toast-top-center"
        };

        for (let input of inputs){
            fd.append(input.name, input.value);
        }

        fetch('php/mailing.php', {
            method: 'POST',
            body: fd
        }).then(res => res.json())
        .then(ans => {
            if (ans.error){
                toastr["error"](ans.message, "Ошибка");
            } else {
                toastr["success"](ans.message, "Удачно");
                nameField.value = '';
                phoneField.value = '';
                emailField.value = '';
            }
            sendButton.disabled = false;
        });
    };

    //append all elements
    formContainer.appendChild(formNote);
    formContainer.appendChild(nameField);
    formContainer.appendChild(phoneField);
    formContainer.appendChild(emailField);
    formContainer.appendChild(sendButton);
}

function phoneValidation(phone, reg) {
    if (phone.match(reg)) {
        return true;
    }
    return false;
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