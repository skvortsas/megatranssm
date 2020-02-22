export default function arrowPressEvent (arrow, containerGolden, newPageCheck) {
    arrow.onclick = () => {
        newPageCheck(++containerGolden.id);
    };
}