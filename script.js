const colorExample = document.getElementById("color-example");
const hexCode = document.querySelector(".hex");
const rgbCode = document.querySelector(".rgb");
const refreshColorBth = document.getElementById("refresh-color");

function generateRandomNum(max) {
    return Math.floor(Math.random() * (max + 1))
}

function generateRGBColor(){
    const  r = generateRandomNum(255);
    const  g = generateRandomNum(255);
    const  b = generateRandomNum(255);
    return [r, g, b]
}

function rgbToHex(rgb) {
    return "#" + rgb.map(color=> color.toString(16)).join("").padStart(6, 0);
}

function setColor() {
    const  [r, g, b] = generateRGBColor();
    const hexColor = rgbToHex([r, g, b]);
    colorExample.style.backgroundColor = hexColor;
    rgbCode.textContent = `rgb(${r},${g},${b})`;
    hexCode.textContent = hexColor;
    console.log("set color")
    console.log(colorExample)
}

setColor();
refreshColorBth.addEventListener("click", setColor);