
function selectedBar(index) {
    if (selector != index.id) {
        selector = index.id;
        onOff = "enabled";
        onOff2 = "enabled";
        show();
        return `Selected ${index}`;
    }
    else {
        selector = "none";
        onOff = "disabled";
        onOff2 = "disabled"  ;
        show ();
        return `Deselected ${index}`
    }
}

function deleteBar(index) {
    delete numbers[(selector - 1)];
    onOff = "disabled";
    onOff2 = "disabled";
    selector = "none";
    numbers = numbers.filter(() => true);
    show();
    return `removed ${index}`;
}

function changeBar() {
    if (!(10 < inputValue || inputValue == undefined || inputValue == 0)) {
        numbers[selector - 1] = inputValue;
        show();
        return `edited ${selector}`;
    } else {
        alert("Feltet er tomt eller du har valgt et ugyldig tall (Over 10 eller under 1)") ;     
        return "failed";
    }
}

function addBar() {
    if (!(10 < inputValue || inputValue == undefined || inputValue == 0)) {
        numbers.push(inputValue);
        show();
        return "added";
    } else {
        alert("Feltet er tomt eller du har valgt et ugyldig tall (Over 10 eller under 1)");
        return "failed";
    }
}