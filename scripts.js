let elem = document.getElementById("element");
let code = document.getElementById("code");
let inputs = document.querySelectorAll(".slider-wrapper");

inputs.forEach(inp => inp.addEventListener("input", generateShadow));

function generateShadow() {
    let hShadow = document.getElementById("h-shadow").value;
    let vShadow = document.getElementById("v-shadow").value;
    let bRadius = document.getElementById("blur-radius").value;
    let sRadius = document.getElementById("spread-radius").value;
    let sColor = document.getElementById("shadow-color").value;
    let sColorOpacity = document.getElementById("shadow-color-opacity").value;
    let sInset = document.getElementById("shadow-inset").Checked;
    
    let boxShadow = sInset ? `inset ${hShadow}px ${vShadow}px ${bRadius}px ${sRadius}px ${hexToRgba(sColor, sColorOpacity)}`
    : `${hShadow}px ${vShadow}px ${bRadius}px ${sRadius}px ${hexToRgba(sColor, sColorOpacity)}`;

    elementColor()

    elem.style.boxShadow = boxShadow;
    code.textContent = `box-shadow: ${boxShadow}`
}

function hexToRgba(sColor, sColorOpacity) {
    let r = parseInt(sColor.substr(1,2),16);
    let g = parseInt(sColor.substr(3,2),16);
    let b = parseInt(sColor.substr(5,2),16);
    return `rgba(${r},${g},${b},${sColorOpacity})`
}

function copyCode() {
    code.select();
    document.execCommand("copy");
    alert("Copiado!");
}

function elementColor() {
    let EColor = document.getElementById("element-color").value;
    elem.style.backgroundColor = EColor;
}
