const input = document.getElementById('input');
const CtnMsg = document.getElementById('Ctn-Msg');
const IconMsg = document.getElementById('IconMsg');

// Funcion para enviar el mensaje

input.onkeydown = function(e){
    if(e.keyCode == 13){
        input.value = "";
        CtnMsg.classList.add("Ctn-inputmsgSend");
        IconMsg.classList.toggle("Ctn-iconmsgSend");
        input.disabled = true;
    }
 };

 IconMsg.addEventListener("click", ClickImgMsg)

//Funcion al apretar en el icono del mensaje para mandar otro

 function ClickImgMsg() {
     CtnMsg.classList.replace("Ctn-inputmsgSend", "Ctn-inputmsg");
     IconMsg.classList.replace("Ctn-iconmsgSend", "Ctn-iconmsg");
     setTimeout(function(){ IconMsg.classList.remove("Ctn-iconmsg") }, 1700);
     input.disabled = false;
     console.log("gola");
     
 }