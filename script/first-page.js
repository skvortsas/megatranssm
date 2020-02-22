export default function firstPage(informationContainer, informationHeader, informationDescription){
    let advantage = document.getElementsByClassName('advantage')[0];

    removeElement(advantage);

    informationContainer.style.marginLeft = '0';
    informationContainer.style.marginRight = '0';
    informationContainer.style.marginTop = '15%';
    informationContainer.style.padding = '0';
    informationHeader.style.fontSize = '75px';
    informationHeader.style.marginLeft = '0';
    informationHeader.style.marginTop = '0';
    informationHeader.style.width = '100%';
    informationDescription.style.fontSize = '20px';
    informationDescription.style.width = '40%';
    informationDescription.style.color = 'gray';
    informationDescription.style.position = 'relative';
    informationDescription.style.fontWeight = '400';

    if(window.matchMedia('(max-width: 1400px)').matches){
        informationContainer.style.marginTop = '10%';
        informationHeader.style.fontSize = '55px';
        informationDescription.style.width = '60%';
    }
}

function removeElement(element) {
    element ? element.style.display = 'none' : false;
}