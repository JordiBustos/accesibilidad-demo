const agrandarTexto = agrandarTextoClosure();
const agrandarLineHeight = agrandarLineHeightClosure();
const agrandarEspaciado = agrandarEspaciadoClosure();
const dislexiaFriendly = dislexiaFriendlyClosure();
const cambiarAlineacion = cambiarAlineacionClosure();
const resaltarEnlaces = resaltarEnlacesClosure();
hideButtonContainer();
let booleanContainer = false;

function hideButtonContainer() {
  const buttonContainer = document.getElementById("button_container");
  buttonContainer.style.display = "none";
}
function showButtonContainer() {
  const buttonContainer = document.getElementById("button_container");
  buttonContainer.style.display = "flex";
}

function mostrarButtons() {
  booleanContainer ? hideButtonContainer() : showButtonContainer();
  booleanContainer = !booleanContainer;
}

function agrandarLineHeightClosure() {
  const items = document.getElementsByClassName("accesibilidad-texto");
  const arrOfFirstLineHeights = [];
  for (let i = 0; i < items.length; i++) {
    arrOfFirstLineHeights.push(
      parseFloat(
        window.getComputedStyle(items[i], null).getPropertyValue("line-height")
      )
    );
  }
  let timesAugmented = 0;

  function agrandarLineHeight() {
    let newLineHeight;
    for (let i = 0; i < items.length; i++) {
      if (timesAugmented == 0) {
        newLineHeight = arrOfFirstLineHeights[i] * 1.05;
      } else {
        if (timesAugmented == 1) {
          newLineHeight = arrOfFirstLineHeights[i] * 1.1;
        } else {
          if (timesAugmented == 2) {
            newLineHeight = arrOfFirstLineHeights[i] * 1.15;
          } else {
            if (timesAugmented == 3) {
              newLineHeight = arrOfFirstLineHeights[i] * 1.2;
            } else {
              timesAugmented = 0;
              newLineHeight = arrOfFirstLineHeights[i];
            }
          }
        }
      }
      items[i].style.lineHeight = `${newLineHeight}px`;
    }
    const times = document.getElementById("lineHeightAugmented");
    times.textContent = timesAugmented == 0 ? "" : `(${timesAugmented})`;
    timesAugmented++;
  }
  return agrandarLineHeight;
}

function cambiarAlineacionClosure() {
  const items = document.getElementsByClassName("accesibilidad-texto");
  const options = ["center", "left", "right", "justify"];
  const optionsSpanish = ["centro", "izquierda", "derecha", "justificado"];
  let option = 1;
  const textAlign = document.getElementById("textAlign");
  function cambiarAlineacion() {
    textAlign.textContent = `(${optionsSpanish[option]})`;
    for (let i = 0; i < items.length; i++) {
      items[i].style.textAlign = options[option];
    }
    option == 3 ? (option = 0) : option++;
  }
  return cambiarAlineacion;
}

function cambiarContraste() {}

function dislexiaFriendlyClosure() {
  const items = document.getElementsByClassName("accesibilidad-texto");
  const span = document.getElementById("dislexiaOnOff");
  let start = true;

  function dislexiaFriendly() {
    for (let i = 0; i < items.length; i++) {
      start
        ? (items[i].style.fontFamily = "Courier Prime")
        : (items[i].style.fontFamily = "Roboto");
    }
    start ? (span.textContent = "(si)") : (span.textContent = "(no)");
    start = !start;
  }
  return dislexiaFriendly;
}

function agrandarEspaciadoClosure() {
  const items = document.getElementsByClassName("accesibilidad-texto");
  const arrOfFirstWordSpaces = [];
  for (let i = 0; i < items.length; i++) {
    arrOfFirstWordSpaces.push(
      parseFloat(
        window.getComputedStyle(items[i], null).getPropertyValue("word-spacing")
      )
    );
  }
  let timesAugmented = 0;

  function agrandarEspaciado() {
    let newWordSpace;
    for (let i = 0; i < items.length; i++) {
      if (timesAugmented == 0) {
        newWordSpace = 5;
      } else {
        if (timesAugmented == 1) {
          newWordSpace = 7.5;
        } else {
          if (timesAugmented == 2) {
            newWordSpace = 10;
          } else {
            if (timesAugmented == 3) {
              newWordSpace = 15;
            } else {
              timesAugmented = 0;
              newWordSpace = 0;
            }
          }
        }
      }
      items[i].style.wordSpacing = `${newWordSpace}px`;
    }
    const times = document.getElementById("wordSpaceAugmented");
    times.textContent = timesAugmented == 0 ? "" : `(${timesAugmented})`;
    timesAugmented++;
  }
  return agrandarEspaciado;
}

function agrandarTextoClosure() {
  const items = document.getElementsByClassName("accesibilidad-texto");
  const arrOfFirstFontSizes = [];
  for (let i = 0; i < items.length; i++) {
    arrOfFirstFontSizes.push(
      parseFloat(
        window.getComputedStyle(items[i], null).getPropertyValue("font-size")
      )
    );
  }
  let timesAugmented = 0;

  function agrandarTexto() {
    let newFontSize;
    for (let i = 0; i < items.length; i++) {
      if (timesAugmented == 0) {
        newFontSize = arrOfFirstFontSizes[i] * 1.1;
      } else {
        if (timesAugmented == 1) {
          newFontSize = arrOfFirstFontSizes[i] * 1.2;
        } else {
          if (timesAugmented == 2) {
            newFontSize = arrOfFirstFontSizes[i] * 1.3;
          } else {
            if (timesAugmented == 3) {
              newFontSize = arrOfFirstFontSizes[i] * 1.35;
            } else {
              timesAugmented = 0;
              newFontSize = arrOfFirstFontSizes[i];
            }
          }
        }
      }
      items[i].style.fontSize = `${newFontSize}px`;
    }
    const times = document.getElementById("textAugmented");
    times.textContent = timesAugmented == 0 ? "" : `(${timesAugmented})`;
    timesAugmented++;
  }
  return agrandarTexto;
}

function resaltarEnlacesClosure() {
    const arrOfLinks = document.getElementsByClassName('accesibilidad-link');
    const arrOfLinkStyles = []
    for (let i = 0; i < arrOfLinkStyles.length; i++) {
        arrOfLinkStyles.push(arrOfLinks[i].style);
    }
    console.log(arrOfLinkStyles)
    let start = true;

    function resaltarEnlaces() {
        for (let i = 0; i < arrOfLinks.length; i++) {
            start ? changeLinkColor(arrOfLinks) : normalLinkColor(arrOfLinks, arrOfLinkStyles);
        }
        start = !start;
    }
    return resaltarEnlaces
}

function changeLinkColor(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.backgroundColor = 'black';
        arr[i].style.color = 'yellow';
        arr[i].style.textDecoration = 'underline';
    }
}

function normalLinkColor(arr, styles) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].style = styles[i];
    }
}