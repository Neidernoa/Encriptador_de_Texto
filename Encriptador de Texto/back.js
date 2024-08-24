const textArea = document.querySelector(".text-area");    /*form_input*/
const mensaje = document.querySelector(".mensaje");
const imagenMuneco = document.querySelector(".muñeco");
const resultadoTitulo = document.querySelector(".result_title");
const resultadoText = document.querySelector(".result_text");
const btnEncriptar = document.querySelector(".botonEncriptar");
const btnDesencriptar = document.querySelector(".botonDesencriptar");
const btnCopiar = document.querySelector(".botonCopiar");

const llaves = [
    ["e", "enter"],
    ["i", "ines"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function ecriptarmensaje(mensaje){
    let mensajeEncriptado = "";
    for(let i = 0; i < mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;
        for(let j = 0; j < llaves.length; j++){
            if(letra === llaves[j][0]) {
                encriptada = llaves[j][1];
            break;

            }
        }
        mensajeEncriptado += encriptada;
    }
    
    return mensajeEncriptado;
}

function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0])
    }
    return mensajeDesencriptado;

}

textArea.addEventListener("input", (e)=>{
    imagenMuneco.style.display = "none"
    resultadoTitulo.textContent = "Analizando Mensaje...";
    resultadoText.textContent = ""
  })
  
  btnEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = ecriptarmensaje(mensaje);
    resultadoText.textContent = mensajeEncriptado;  
    btnCopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "El texto Encriptado es:";
  
  })
 
  btnDesencriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadoText.textContent = mensajeDesencriptado;
    btnCopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "El texto Desencriptado es:";
});

btnCopiar.addEventListener('click', ()=>{
    let textoCopiado = resultadoText.textContent
    navigator.clipboard.writeText(textoCopiado).then(()=> {
        imagenMuneco.style.display = "block"
        resultadoTitulo.textContent = "El texto fue copiado";
        btnCopiar.classList.add("hidden")
        resultadoText.textContent = ""
    })
})