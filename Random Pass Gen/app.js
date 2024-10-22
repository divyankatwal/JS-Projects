const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

const passbox = document.getElementById("pass");
const totalchar = document.getElementById("passLength");
const UpperInput = document.getElementById("upper-case");
const LowerInput = document.getElementById("lower-case");
const NumInput = document.getElementById("numbers");
const SymInput = document.getElementById("symbols");

function getRandomDataSet(DataSet) {
    return DataSet[Math.floor(Math.random() * DataSet.length)]
}

function generatepass(password = "") {
    if(UpperInput.checked) {
        password += getRandomDataSet(upperSet)
    }
    if(LowerInput.checked) {
        password += getRandomDataSet(lowerSet)
    }
    if(NumInput.checked) {
        password += getRandomDataSet(numberSet)
    }
    if(SymInput.checked) {
        password += getRandomDataSet(symbolSet)
    }
    if(password.length < totalchar.value) {
        return generatepass(password)
    }
    pass.innerText = truncateString(password, totalchar.value);
    toastr.success("Password generated and Copied");

    navigator.clipboard.writeText(pass.innerText)
}

document.getElementById("btn").addEventListener(
    "click",
    function() {
        generatepass();
    }
)

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}