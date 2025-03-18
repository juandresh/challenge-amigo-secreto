// import random from 'random'

let lista_amigos = [];

function asignarAmigo(amigo){
    let listaRes = document.getElementById('resultado');
    listaRes.textContent = `El amigo secreto sorteado es: ${amigo}`;
}

function agregarAmigo() {

    let lista = document.getElementById('listaAmigos');
    let input = document.getElementById('amigo');
    let nombre = input.value;
    
    if (nombre){
        lista_amigos.push(nombre);
        let li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
        input.value = '';
    }else{
        alert('Debes ingresar un nombre');
    }
}


function sortearAmigo() {

    if (lista_amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let amigo = Math.floor(Math.random() * lista_amigos.length);
    let amigoSelect = lista_amigos[amigo];
    console.log(amigoSelect);

    asignarAmigo(amigoSelect);
}
