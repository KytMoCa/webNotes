function addMensaje(){
    $mensaje = "Hola Mundo";
}


//Estamos creando una funcion
function addNote(){
    //Capturar el dato que se pone en el Input
const noteInput = document.getElementById('noteInput');
    //Comunicarnos ul con html
const noteList = document.getElementById('noteList');


//Generamos una condicional 
//Condicion --> si la caja de texto esta vacia
// entonces proceso llenar una lista

    if (noteInput.value.trim() !== ""){
        //Creamos un elemento li
        const newNote = document.createElement('li');
        //Agregamos el texto que se pone en el input
        newNote.textContent = noteInput.value;
        //Agregamos el elemento li al ul
        noteList.appendChild(newNote);
        //Limpiamos el input
        noteInput.value = "";
    }else{
        alert('No se puede agregar una nota vacia :^ ');
    }
}   