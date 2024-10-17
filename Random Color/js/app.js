function onclick() {
    
    const randomNumber = Math.floor(Math.random()*16777215);
    const colorCode = "#"+randomNumber.toString(16);
    document.body.style.backgroundColor = colorCode;
    document.getElementById("color-code").innerText = colorCode;

    navigator.clipboard.writeText(colorCode)

}

document.getElementById("btn").addEventListener(
    "click",
    onclick
)

onclick();