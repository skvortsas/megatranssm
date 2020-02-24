export default function arrowPressEvent (arrow, containerGolden, newPageCheck) {
    arrow.onclick = () => {
        if (containerGolden.id < 5)
            newPageCheck(++containerGolden.id);
    };
}