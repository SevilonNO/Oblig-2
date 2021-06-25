
// model

var contentDiv = document.getElementById('content');
let numbers = [10, 3, 1, 5, 8];
let inputValue; 
let onOff = "disabled";
let onOff2 = "disabled";
let selector = "None";

// view

show();
function show() {
    let svgInnerHtml = '';
    for (let i = 0; i < numbers.length; i++) {
        svgInnerHtml += createBar(numbers[i], i + 1);
    }
    contentDiv.innerHTML = `
        <svg id="chart" width="500" viewBox="0 0 100 100">
            ${svgInnerHtml}
        </svg><br/>
        Valgt stolpe: <i>${selector}</i>
        <br />
        Verdi:
        <input type="number" min="1" max="10" oninput="inputValue = this.value" />
        <button onclick="addBar()">Legg til stolpe</button>
        <button onclick="changeBar()" ${onOff2}>Endre valgt stolpe</button><br />
        <button id="removeBtn" onclick="deleteBar()" ${onOff}>Fjerne valgt stolpe</button>
        `;
}

function createBar(number, barNo) {
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 10;
    let y = 100 - height;
    let color = calcColor(1, 10, barNo);
    let stroke = selector == barNo ? "black" : "";
    return `<rect width="${width}" id="${barNo}" height="${height}"x="${x}" y="${y}" fill="${color}" stroke="${stroke}" onclick="selectedBar(this)"></rect>`;
}

function calcColor(min, max, val) {
    var minHue = 240, maxHue = 0;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}