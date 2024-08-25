// Variables
const btnEncrypt = document.querySelector(".btn_encrypt");
const inputText = document.querySelector(".input_text");
const warningText = document.querySelector(".warning_text");
const outputText = document.querySelector(".output_text");
const btnCopy = document.querySelector(".btn_copy");
const btnDecrypt = document.querySelector(".btn_decrypt");

// Encriptar
btnEncrypt.addEventListener("click", e => {
    e.preventDefault();
    let text = inputText.value;
    let cleanText = text.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if (text === "") {
        warningText.style.background = "#0150EB";
        warningText.style.color = "#FFFF";
        warningText.style.fontWeight = "900";
        warningText.textContent = "El campo de texto no debe estar vacío";
        
        setTimeout(() => {
            warningText.removeAttribute("style");
        }, 1500);
    } else if (text !== cleanText) {
        warningText.style.background = "#0150EB";
        warningText.style.color = "#FFFF";
        warningText.style.fontWeight = "800";
        warningText.textContent = "No debe tener acentos y caracteres especiales";
        
        setTimeout(() => {
            warningText.removeAttribute("style");
        }, 1500);
    } else if (text !== text.toLowerCase()) {
        warningText.style.background = "#0150EB";
        warningText.style.color = "#FFFF";
        warningText.style.fontWeight = "900";
        warningText.textContent = "El texto debe ser todo en minúscula";
        
        setTimeout(() => {
            warningText.removeAttribute("style");
        }, 1500);
    } else {
        text = text.replace(/e/mg, "enter")
                   .replace(/i/mg, "imes")
                   .replace(/a/mg, "ai")
                   .replace(/o/mg, "ober")
                   .replace(/u/mg, "ufat");

        outputText.value = text;
        btnCopy.style.visibility = "visible";
    }
});

// Desencriptar
btnDecrypt.addEventListener("click", e => {
    e.preventDefault();
    let text = inputText.value;
    let cleanText = text.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if (text === "") {
        warningText.style.background = "#0150EB";
        warningText.style.color = "#FFFF";
        warningText.style.fontWeight = "900";
        warningText.textContent = "El campo de texto no debe estar vacío";
        
        setTimeout(() => {
            warningText.removeAttribute("style");
        }, 1500);
    } else if (text !== cleanText) {
        warningText.style.background = "#0150EB";
        warningText.style.color = "#FFFF";
        warningText.style.fontWeight = "900";
        warningText.textContent = "No debe tener acentos y caracteres especiales";
        
        setTimeout(() => {
            warningText.removeAttribute("style");
        }, 1500);
    } else if (text !== text.toLowerCase()) {
        warningText.style.background = "#0150EB";
        warningText.style.color = "#FFFF";
        warningText.style.fontWeight = "900";
        warningText.textContent = "El texto debe ser todo en minúscula";
        
        setTimeout(() => {
            warningText.removeAttribute("style");
        }, 1500);
    } else {
        text = text.replace(/enter/mg, "e")
                   .replace(/imes/mg, "i")
                   .replace(/ai/mg, "a")
                   .replace(/ober/mg, "o")
                   .replace(/ufat/mg, "u");

        outputText.value = text;
        btnCopy.style.visibility = "visible";
    }
});

// Copiar
btnCopy.addEventListener("click", e => {
    e.preventDefault();
    navigator.clipboard.writeText(outputText.value)
        .then(() => {
            // Copiado exitoso
            alert("Texto copiado al portapapeles");
        })
        .catch(err => {
            // Error al copiar
            console.error("Error al copiar el texto: ", err);
        });
});
