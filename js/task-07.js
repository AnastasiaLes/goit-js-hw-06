const getFontRange = document.getElementById('font-size-control');
const textEl = document.getElementById('text');
// console.log(getFontRange);
// console.log(textEl);

const changeFont = () => {
    textEl.style.fontSize = `${getFontRange.value}px`
 };

getFontRange.addEventListener('input', changeFont)