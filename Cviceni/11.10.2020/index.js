function loadContent(url, successCallback, failCallback) {
    successCallback(url);
    switch (url) {
        case 'abc':
            successCallback("obsah souboru")
            break;
        default:
            failCallback("na zadane url nic neni");
            break;
    }
}

//loadContent("bjnj", console.log, console.error);


// Pr 1
// zkontrolujte, ze text neni delsi nez 20 znaku a neobsahuje mezeru
// pridejte callback pro pripad validniho i nevalidniho textu

function checkText(text, callback1 = console.log, callback2 = console.error) {
    let result;
    let className;
    if (text.length <= 20 && text.includes(" ")) {
        callback1("validni");
        result = "Validni";
        className = "green";
    } else {
        callback2("nevalidni");
        result = "Nevalidni";
        className = "red";
    }
    document.getElementById("result").innerText = result;
    document.getElementById("result").style.color = className;
}