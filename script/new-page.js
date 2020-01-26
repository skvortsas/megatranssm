import pages from './storage';
import firstPageStyle from './first-page';
import secondPageStyle from './second-page';
import thirdPageStyle from './third-page';

let allowScroll = true;

export default function newPageCheck(){
    let informationHeader = document.getElementsByClassName('information-header')[0];
    let informationDescription = document.getElementsByClassName('information-description')[0];
    let containerGolden = document.getElementsByClassName('container-front-page')[0];  
    
    document.addEventListener('wheel', e => {
        let image = document.getElementsByClassName('image')[0];
        let note = document.getElementsByClassName('advantage-note')[0];
        //if the user is trying to scroll down and current page is not the last one
        if ((e.deltaY > 0) && allowScroll && containerGolden.id < pages.length - 1) {
            allowScroll = false;

                informationHeader.classList.remove('aos-animate');
                informationDescription.classList.remove('aos-animate');

                if(image)
                    image.classList.remove('aos-animate');
                
                if(note)
                    note.classList.remove('aos-animate');

                setTimeout(() => {
                    getNewContent(informationHeader, pages[++containerGolden.id].informationHeader);
                    getNewContent(informationDescription, pages[containerGolden.id].informationDescription);
                    setPageStyle(containerGolden.id, informationHeader, informationDescription);
                    allowScroll = true;
                }, 1200);
                //else if the user is trying to scroll up and current page is not the first one
        } else if ((e.deltaY < 0) && allowScroll && containerGolden.id > 0) {
            allowScroll = false;

                informationHeader.classList.remove('aos-animate');
                informationDescription.classList.remove('aos-animate');

                if(image)
                    image.classList.remove('aos-animate');
                
                if(note)
                    note.classList.remove('aos-animate');

                setTimeout(() => {
                    getNewContent(informationHeader, pages[--containerGolden.id].informationHeader);
                    getNewContent(informationDescription, pages[containerGolden.id].informationDescription);
                    setPageStyle(containerGolden.id, informationHeader, informationDescription);
                    allowScroll = true;
                }, 1200);
        }
    });
}

function setPageStyle(pageNumber, informationHeader, informationDescription){
    let informationContainer = document.getElementsByClassName('information-container')[0];

    switch(pageNumber){
        case '0': 
            firstPageStyle(informationContainer, informationHeader, informationDescription);
            break;
        case '1':
            secondPageStyle(informationContainer, informationHeader, informationDescription);
            break;
        case '2':
            thirdPageStyle(informationContainer, informationHeader, informationDescription, pageNumber);
            break;
        default:
            console.error('undefined error');
    }
}

function getNewContent(element, newContent){
    element.textContent = newContent;
    element.classList.add('aos-animate');
}