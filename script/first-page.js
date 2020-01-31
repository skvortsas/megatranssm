export default function firstPage(informationContainer, informationHeader, informationDescription){
    informationContainer.style.marginLeft = '0';
    informationContainer.style.marginRight = '0';
    informationHeader.style.fontSize = '75px';
    informationHeader.style.marginLeft = '0';
    informationDescription.style.fontSize = '20px';
    informationDescription.style.width = '40%';
    informationDescription.style.color = 'gray';

    if(window.matchMedia('(max-width: 1400px)').matches){
        informationHeader.style.fontSize = '55px';
        informationDescription.style.width = '60%';
    }
}