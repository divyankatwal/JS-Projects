function onclick() {
    
    const randomNumber = Math.floor(Math.random()*16777215);
    const colorCode = "#"+randomNumber.toString(16);
    document.body.style.backgroundColor = colorCode;
    document.getElementById("color-code").innerText = colorCode;
    toastr.success("Color Code Copied");

    navigator.clipboard.writeText(colorCode)

}

function manual() {
    const manualColor = document.getElementById('color-data').value;
    document.body.style.backgroundColor = manualColor;
    console.log(manualColor);
    toastr.success("Color Changed");
}
document.getElementById("btn").addEventListener(
    "click",
    onclick
)

document.getElementById("btn2").addEventListener(
    'click',
    manual
)
