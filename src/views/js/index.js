const input = document.getElementById('input');
const CtnMsg = document.getElementById('Ctn-Msg');
const IconMsg = document.getElementById('IconMsg');
const GridCtn = document.getElementById('Grid-ctn');





let array = ["Hola", "Como", "estas", "Cristian", "Jose", "Prueba", "Ojala que ande", "Me muero si no anda"]
let length = array.length


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


let NumberY = Math.floor(Math.random() * (5 - 1)) + 1;
let NumberX = Math.floor(Math.random() * (5 - 1)) + 1;
console.log(NumberY);
console.log(NumberX);

// Funcion para enviar el mensaje

let time = 3000



input.onkeydown = function (e) {
    if (e.keyCode == 13) {
        let children = GridCtn.childNodes

        array.push(input.value)
        for (let i = 0; i <= (array.length - 1); i++) {
            setTimeout(() => {
                GridCtn.insertAdjacentHTML("beforeend", ` <div class="CtnM" style="grid-column: ${getRandomInt(1, 5)}; grid-row:${getRandomInt(1, 5)}" id="aa">
            <div>${array[i]}</div> 
        </div>` );
       }, time);

            time += 2000;





        }
        CtnMsg.classList.add("Ctn-inputmsgSend");
        IconMsg.classList.toggle("Ctn-iconmsgSend");
        input.disabled = true;
    }

}



IconMsg.addEventListener("click", ClickImgMsg)

//Funcion al apretar en el icono del mensaje para mandar otro

function ClickImgMsg() {
    input.value = ""
    input.disabled = false;
    CtnMsg.classList.replace("Ctn-inputmsgSend", "Ctn-inputmsg");
    IconMsg.classList.replace("Ctn-iconmsgSend", "Ctn-iconmsg");
    Mensaje.classList.replace("CtnM", "CtnMEs")
    setTimeout(function () { IconMsg.classList.remove("Ctn-iconmsg"); Mensaje.classList.remove("CtnMEs") }, 1700);
    input.disabled = false;
    console.log("gola");

}

