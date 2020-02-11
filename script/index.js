import aos from 'aos';
import webfont from 'webfontloader';
import '../style/index.scss';
import '../node_modules/aos/dist/aos.css';
import newPageCheck from './new-page.js';

let logo = document.getElementsByClassName('logo')[0];
logo.onanimationend = () => {
    startWhenReady();
    logo.onanimationend = () => {
        //find the way to make one iteration better
        //now if delete this onanimationend method, getFrontPage function calls endless times
    };
}
aos.init();

function startWhenReady(){
    webfont.load({
        google: {
            families: ['Comfortaa', 'Montserrat']
        },
        active: () => {
            //using slow internet - google fonts would use alternative font until it loads the fonts you want
            setTimeout(getFrontPage, 1500);
        }
    });
}

function getFrontPage(){
    let logo = document.getElementsByClassName('logo')[0];
    let containerLogo = document.getElementsByClassName('container')[0];
    let body = document.getElementsByTagName('body')[0];
    let containerGolden = document.createElement('div');
    let wraper = document.createElement('div');
    let arrowDown = document.createElement('div');

    wraper.classList.add('wraper');

    containerGolden.classList.add('container-front-page');
    containerGolden.id = 0;
    arrowDown.classList.add('arrow-down');

    containerLogo.parentNode.removeChild(containerLogo);
    body.style.backgroundColor = '#202020';
    logo.style.opacity = '1';
    logo.style.marginLeft = '0';
    containerGolden.appendChild(logo);
    containerGolden.appendChild(arrowDown);
    containerGolden.appendChild(createMenu());
    wraper.appendChild(containerGolden);
    body.appendChild(wraper);

    loadWritesFrontPage();
    loadMenuButton();
    newPageCheck();
}

function loadMenuButton(){
    let menuContainer = document.createElement('div');
    let topBorder = document.createElement('div');
    let bottomBorder = document.createElement('div');
    let containerGolden = document.getElementsByClassName('container-front-page')[0];
    let menuWrapper = document.getElementsByClassName('menu-wrapper')[0];
    let menuElements = document.getElementsByClassName('menu-element');
    let collapsed = true;

    menuContainer.classList.add('menu-container');
    topBorder.classList.add('border-menu-top');
    bottomBorder.classList.add('border-menu-bottom');

    menuContainer.setAttribute('data-aos', 'flip-right');
    menuContainer.setAttribute('data-aos-duration', 2000);
    menuContainer.setAttribute('data-aos-delay', 600);

    menuContainer.appendChild(topBorder);
    menuContainer.appendChild(bottomBorder);
    containerGolden.appendChild(menuContainer);

    //adding stick animation on click
    menuContainer.onclick = () => {
        collapsed = !collapsed;

        if(!collapsed) {
            menuContainer.onmouseover = null;
            menuContainer.onmouseleave = null;
            //show menu container
            menuWrapper.style.display = 'flex';

            for (let i=0; i< menuElements.length; i++){
                //I don't inderstand why it colors like it doesn't have transituin time
                menuElements[i].style.transitionDuration = '2s';
                menuElements[i].style.backgroundColor = 'rgba(32,32,32,.89)';
            }

            topBorder.style.transform = 'rotate(-90deg)';
            setTimeout(() => {
                topBorder.style.transform = 'translateX(-5px) rotate(-90deg)';

                setTimeout(() => {
                    topBorder.style.transform = 'translate(-5px, 6px) rotate(-90deg)';
                }, 500);
            }, 500);
            bottomBorder.style.transform = 'rotate(90deg)';
            setTimeout(() => {
                bottomBorder.style.transform = 'translateX(5px) rotate(90deg)';
            
                setTimeout(() => {
                    bottomBorder.style.transform = 'translate(5px, -6px) rotate(90deg)';
                }, 500);
            }, 500);
        } else {
            topBorder.style.transform = 'rotate(0) translateY(0)';
            bottomBorder.style.transform = 'rotate(0) translateY(0)';
            menuWrapper.style.display = 'none';

            menuContainer.onmouseover = () => {
                topBorder.style.transform = 'rotate(0) translateY(-3px)';
                bottomBorder.style.transform = 'rotate(0) translateY(3px)';
            }
            menuContainer.onmouseleave = () => {
                topBorder.style.transform = 'rotate(0) translateY(0)';
                bottomBorder.style.transform = 'rotate(0) translateY(0)';
            }
           
        }
    };
}

function createMenu(){
    let menu = document.createElement('div');
    let homeButton = createMenuElement('Домой');
    let aboutButton = createMenuElement('О нас');
    let advantagesButton = createMenuElement('Почему мы');
    let contactButton = createMenuElement('Контакты');

    menu.classList.add('menu-wrapper');

    menu.appendChild(homeButton);
    menu.appendChild(aboutButton);
    menu.appendChild(advantagesButton);
    menu.appendChild(contactButton);

    return menu;
}

function createMenuElement(content){
    let menuElement = document.createElement('span');
    let menuElementContent = document.createElement('p');

    menuElement.classList.add('menu-element');
    menuElementContent.classList.add('menu-content');

    menuElementContent.textContent = content;

    menuElement.appendChild(menuElementContent);

    return menuElement;
}

function loadWritesFrontPage(){
    let informationDescriptionText = 'Мега Транс всегда заботится о своих клиентах, с нами Вы можете позволить себе не волноваться и провести время как всегда хотели.';
    let containerGolden = document.getElementsByClassName('container-front-page')[0];
    let informationContainer = document.createElement('div');
    let informationHeader = document.createElement('p');
    let informationDescription = document.createElement('p');

    informationContainer.classList.add('information-container');
    
    informationHeader.classList.add('information-header');
    informationHeader.textContent = 'Инвестируйте в своё время';
    informationHeader.setAttribute('data-aos', 'fade-up');
    informationHeader.setAttribute('data-aos-duration', 1000);

    informationDescription.classList.add('information-description');
    informationDescription.textContent = informationDescriptionText;
    informationDescription.setAttribute('data-aos', 'fade-up');
    informationDescription.setAttribute('data-aos-duration', 1000);
    informationDescription.setAttribute('data-aos-delay', 300);

    informationContainer.appendChild(informationHeader);
    informationContainer.appendChild(informationDescription);
    containerGolden.appendChild(informationContainer);
}