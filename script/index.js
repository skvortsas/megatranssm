setTimeout(getFrontPage, 5000);

function getFrontPage(){
    let logo = document.getElementsByClassName('logo')[0];
    let containerLogo = document.getElementsByClassName('container')[0];
    let body = document.getElementsByTagName('body')[0];
    let containerGolden = document.createElement('div');

    containerGolden.classList.add('containerFrontPage');
    
    logo.style['background-size'] = '55px';
    logo.style.width = '55px';
    logo.style.height = '25px';
    logo.style.marginLeft = '0';
    containerLogo.style.marginTop = '0';
    body.style.backgroundColor = '#202020';
    containerGolden.style.border = '1px solid #ce9f51';
    containerGolden.style.minHeight = '97vh';
    logo.style.opacity = '1';
    logo.style.marginLeft = '5px';
    logo.style.marginTop = '5px';
    containerGolden.appendChild(logo);
    body.appendChild(containerGolden);
    loadWritesFrontPage();
}

function loadWritesFrontPage(){
    let informationDescriptionText = 'Мега Транс всегда заботится о своих клиентах, с нами Вы можете позволить себе не волноваться и провести время как всегда хотели.';
    let containerGolden = document.getElementsByClassName('containerFrontPage')[0];
    let informationContainer = document.createElement('div');
    let informationHeader = document.createElement('p');
    let informationDescription = document.createElement('p');

    informationContainer.style.marginTop = '15%';
    informationHeader.style.marginLeft = '30px';
    informationHeader.style.marginBottom = 'auto';
    informationHeader.style.width = '450px';
    informationHeader.style.fontFamily = 'Caveat, cursive';
    informationHeader.style.color = '#ce9f51';
    informationHeader.style.fontSize = '50px';
    informationHeader.textContent = 'Инвестирйте в своё время';
    informationDescription.style.marginLeft = '30px';
    informationDescription.style.width = '450px';
    informationDescription.style.color = 'gray';
    informationDescription.style.fontFamily = 'Montserrat';
    informationDescription.textContent = informationDescriptionText;

    informationContainer.appendChild(informationHeader);
    informationContainer.appendChild(informationDescription);
    containerGolden.appendChild(informationContainer);
}