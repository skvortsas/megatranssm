import {pages, abilityToScroll, menuCollapse} from './storage';
import firstPageStyle from './first-page';
import secondPageStyle from './second-page';
import thirdPageStyle from './third-page';
import contactPage from './contact-page';

let allowScroll = true;
let yDown = null;                                                        

export default function newPageCheck(index){
    let informationHeader = document.getElementsByClassName('information-header')[0];
    let informationDescription = document.getElementsByClassName('information-description')[0];
    let containerGolden = document.getElementsByClassName('container-front-page')[0];  

    document.addEventListener('touchstart', handleTouchStart, false);        
    document.addEventListener('touchmove', handleTouchMove, false);

    if (index !== undefined){
        let image = document.getElementsByClassName('image')[0];
        let note = document.getElementsByClassName('advantage-note')[0];
        let advantage = document.getElementsByClassName('advantage')[0];
        let contactInformation = document.getElementsByClassName('contact-information')[0];

        menuCollapse.set(!menuCollapse.get());
        setInitialMenuButton(containerGolden);
        informationHeader.classList.remove('aos-animate');
        informationDescription.classList.remove('aos-animate');

        if(image){
            image.classList.remove('aos-animate');
        }
                
        if(note){
            note.classList.remove('aos-animate');
        }

        if(advantage){
            advantage.classList.remove('aos-animate');
        }

        if (contactInformation){
            removeContactPageContent(contactInformation);
        }

        setTimeout(() => {
            if (!abilityToScroll.get()){
                if (index < 3)
                    containerGolden.id = index;
                else
                    containerGolden.id = index + 2;
            } else {
                containerGolden.id = index;
            }
            getNewContent(informationHeader, pages[containerGolden.id].informationHeader);
            getNewContent(informationDescription, pages[containerGolden.id].informationDescription);
            setPageStyle(containerGolden.id, informationHeader, informationDescription);
            abilityToScroll.set(true);
        }, 1200);
    }
    
    document.addEventListener('wheel', e => {
        let image = document.getElementsByClassName('image')[0];
        let note = document.getElementsByClassName('advantage-note')[0];
        let advantage = document.getElementsByClassName('advantage')[0];
        let contactInformation = document.getElementsByClassName('contact-information')[0];
        //if the user is trying to scroll down and current page is not the last one
        if ((e.deltaY > 0) && allowScroll && (containerGolden.id < pages.length - 1) && abilityToScroll.get()) {
            allowScroll = false;

                informationHeader.classList.remove('aos-animate');
                informationDescription.classList.remove('aos-animate');

                if(image){
                    image.classList.remove('aos-animate');
                }
                
                if(note){
                    note.classList.remove('aos-animate');
                }

                if(advantage){
                    advantage.classList.remove('aos-animate');
                }

                setTimeout(() => {
                    getNewContent(informationHeader, pages[++containerGolden.id].informationHeader);
                    getNewContent(informationDescription, pages[containerGolden.id].informationDescription);
                    setPageStyle(containerGolden.id, informationHeader, informationDescription);
                }, 1200);
            //else if the user is trying to scroll up and current page is not the first one
        } else if ((e.deltaY < 0) && allowScroll && containerGolden.id > 0 && abilityToScroll.get()) {
            allowScroll = false;

                if(image){
                    image.classList.remove('aos-animate');
                }
                
                if(note){
                    note.classList.remove('aos-animate');
                }

                if(advantage){
                    advantage.classList.remove('aos-animate');
                }

                if (contactInformation){
                    removeContactPageContent(contactInformation);
                }

                informationHeader.classList.remove('aos-animate');
                informationDescription.classList.remove('aos-animate');

                setTimeout(() => {
                    getNewContent(informationHeader, pages[--containerGolden.id].informationHeader);
                    getNewContent(informationDescription, pages[containerGolden.id].informationDescription);
                    setPageStyle(containerGolden.id, informationHeader, informationDescription);
                }, 1200);
        }
    });
}

function getTouches(evt) {
    return evt.touches;
  }                                                     
  
  function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];                                                                      
      yDown = firstTouch.clientY;                                      
  };                                                
  
  function handleTouchMove(evt) {
    if ( !yDown ) {
        return;
    }

    let image = document.getElementsByClassName('image')[0];
    let note = document.getElementsByClassName('advantage-note')[0];
    let advantage = document.getElementsByClassName('advantage')[0];
    let contactInformation = document.getElementsByClassName('contact-information')[0];
    let containerGolden = document.getElementsByClassName('container-front-page')[0];  
    let informationHeader = document.getElementsByClassName('information-header')[0];
    let informationDescription = document.getElementsByClassName('information-description')[0];
                                 
      var yUp = evt.touches[0].clientY;
  
      var yDiff = yDown - yUp;
  
          if ( yDiff > 0 && (containerGolden.id < pages.length - 1) ) { // swipe up
            informationHeader.classList.remove('aos-animate');
            informationDescription.classList.remove('aos-animate');

            if(image){
                image.classList.remove('aos-animate');
            }
            
            if(note){
                note.classList.remove('aos-animate');
            }

            if(advantage){
                advantage.classList.remove('aos-animate');
            }

            setTimeout(() => {
                getNewContent(informationHeader, pages[++containerGolden.id].informationHeader);
                getNewContent(informationDescription, pages[containerGolden.id].informationDescription);
                setPageStyle(containerGolden.id, informationHeader, informationDescription);
            }, 1200);
          } else if (yDiff < 0 && (containerGolden.id > 0)) { //swipe down
            if(image){
                image.classList.remove('aos-animate');
            }
            
            if(note){
                note.classList.remove('aos-animate');
            }

            if(advantage){
                advantage.classList.remove('aos-animate');
            }

            if (contactInformation){
                removeContactPageContent(contactInformation);
            }

            informationHeader.classList.remove('aos-animate');
            informationDescription.classList.remove('aos-animate');

            setTimeout(() => {
                getNewContent(informationHeader, pages[--containerGolden.id].informationHeader);
                getNewContent(informationDescription, pages[containerGolden.id].informationDescription);
                setPageStyle(containerGolden.id, informationHeader, informationDescription);
            }, 1200);
          }                                                                 
      /* reset values */
      yDown = null;                                             
  };

function setInitialMenuButton(containerGolden){
    let menuContainer = document.getElementsByClassName('menu-container')[0];
    let topBorder = document.getElementsByClassName('border-menu-top')[0];
    let bottomBorder = document.getElementsByClassName('border-menu-bottom')[0];

    topBorder.style.transform = 'rotate(0) translateY(0)';
    bottomBorder.style.transform = 'rotate(0) translateY(0)';
    containerGolden.style.backgroundSize = '100%, 100%, 100%, 48%, 48%';
    if (window.matchMedia('(max-width: 500px)').matches) {
        containerGolden.style.backgroundSize = '100%, 100%, 100%, 45%, 45%';
    }

    menuContainer.onmouseover = () => {
        topBorder.style.transform = 'rotate(0) translateY(-3px)';
        bottomBorder.style.transform = 'rotate(0) translateY(3px)';
    }
    menuContainer.onmouseleave = () => {
        topBorder.style.transform = 'rotate(0) translateY(0)';
        bottomBorder.style.transform = 'rotate(0) translateY(0)';
    }
}

function removeContactPageContent(contactInformation){
    contactInformation.classList.remove('aos-animate');
    setTimeout(() => {
        contactInformation.parentNode.removeChild(contactInformation);
    }, 1000);
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
        case '3':
            thirdPageStyle(informationContainer, informationHeader,informationDescription, pageNumber);
            break;
        case '4':
            thirdPageStyle(informationContainer, informationHeader,informationDescription, pageNumber);
            break;
        case '5':
            contactPage(informationContainer, pages, pageNumber);
            break;
        default:
            console.error('undefined error');
    }

    setTimeout(() => {
        allowScroll = true;
    }, 1000);
}

function getNewContent(element, newContent){
    element.textContent = newContent;
    element.classList.add('aos-animate');
}