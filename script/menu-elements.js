import newPage from './new-page';

export default function menuElementController(containerGolden, menuWrapper){
    colorMenuElementHeader(containerGolden.id, menuWrapper);

    Array.from(menuWrapper.children).forEach((menuElement, index) => {
        menuElement.onclick = () => {
            newPage(index);
            //TODO: the menu button(top right cornor) not animated and collapsed var not changed
            menuWrapper.style.display = 'none';
        };
    });
}

function colorMenuElementHeader(id, menuWrapper){

    Array.from(menuWrapper.children).forEach(menuElement => {
        menuElement.style.color = 'white';
        menuElement.firstChild.style.borderBottom = 'none';
    });

    switch (id) {
        case '0':
            drawBorder(menuWrapper.firstChild);
            break;
        case '1':
            drawBorder(menuWrapper.children[1]);
            break;
        case '2':
        case '3':
        case '4':
            drawBorder(menuWrapper.children[2]);
            break;
        case '5':
            drawBorder(menuWrapper.lastChild);
            break;
    }
}

function drawBorder(menuElement){
    menuElement.style.color = '#ce9f51';
    menuElement.firstChild.style.borderBottom = '3px solid #ce9f51';
}