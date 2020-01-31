export default function secondPage(informationContainer, informationHeader, informationDescription){
    let note = document.getElementsByClassName('advantage-note')[0];
    let image = document.getElementsByClassName('image')[0];
    let advantage = document.getElementsByClassName('advantage')[0];

    if (note){
        note.parentNode.removeChild(note);
    }
    //delete this because we may have previous image and note
    if (image){
        image.parentNode.removeChild(image);
    }

    if (advantage){
        advantage.parentNode.removeChild(advantage);
    }

    informationContainer.style.marginLeft = '5%';
    informationContainer.style.marginRight = '20%';
    informationContainer.style.marginTop = '15%';
    informationHeader.style.fontSize = '30px';
    informationHeader.style.width = '100%';
    informationHeader.style.marginLeft = '30px';
    informationHeader.style.marginTop = 'none';
    informationDescription.style.position = 'relative';
    informationDescription.style.fontSize = '35px';
    informationDescription.style.width = '100%';
    informationDescription.style.color = '#b7b7b7';
    informationDescription.style.fontWeight = '400';

    if(window.matchMedia('(max-width: 1400px)').matches){
        informationDescription.style.fontSize = '25px';
    }
}