let lista_amigos = [];

function asignarAmigo(amigo){
    let listaRes = document.getElementById('amigo-sorteado')
    listaRes.innerHTML = amigo + ' :)';
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

    let modal = document.getElementById('modal-resultado');

    if (lista_amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let amigo = Math.floor(Math.random() * lista_amigos.length);
    let amigoSelect = lista_amigos[amigo];
    document.querySelector('.modal-resultado').style.display = 'flex';

    asignarAmigo(amigoSelect);
}

function resetearLista(){
    let lista = document.getElementById('listaAmigos');
    lista.textContent = '';
    lista_amigos = [];
    let listaRes = document.getElementById('resultado');
    listaRes.textContent = '';
}

function cerrarModal(){
    document.querySelector('.modal-resultado').style.display = 'none';
}