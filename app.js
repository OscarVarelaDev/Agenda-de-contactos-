
const btnagregarContacto = document.getElementById("btnAgregarContacto");
const btnbuscarContacto = document.getElementById("btnbuscarContactos");
const btnmostrarContactos = document.getElementById("btnMostrarContactos");
const btnCerrar = document.getElementById("btnCerrar");
const formAdd = document.getElementById("addNewContact");
const formBuscar = document.getElementById("lfContacts");
const formMostrar = document.getElementById("showContacts");
let guardarContacto = document.getElementById("agregarNuevo")


const mostrarMenu = () => {
    formMostrar.style.display = "none";
    formBuscar.style.display = "none";
    formAdd.style.display = "none";

}

mostrarMenu();


btnbuscarContacto.addEventListener("click", () => {
    formBuscar.style.display = "block";
    formBuscar.style.visibility = "visible";
    formMostrar.style.visibility = "hidden";
    formAdd.style.visibility = "hidden";
    formAdd.style.display = "none";
    formMostrar.style.display = "none";
});



btnagregarContacto.addEventListener('click', (e) => {

    formAdd.style.display = "block";
    formAdd.style.visibility = "visible";
    formBuscar.style.visibility = "hidden";
    formMostrar.style.visibility = "hidden";
    formBuscar.style.display = "none";
    formMostrar.style.display = "none"



    guardarContacto.addEventListener("click", (e) => {
        let nombre = document.getElementById("nombre").value;
        let telefono = document.getElementById("telefono").value;
        let email = document.getElementById("email").value;
        let dbcontactos=localStorage.getItem("contactos")
        let contactos = JSON.parse(dbcontactos)
        if (contactos == null) {
            contactos = []
        }contactos.push({nombre, telefono, email})
        localStorage.setItem("contactos", JSON.stringify(contactos))
        console.log(contactos)  



    })


});

btnmostrarContactos.addEventListener('click', (e) => {

    formMostrar.style.display = "block";
    formMostrar.style.visibility = "visible";
    formBuscar.style.visibility = "hidden";
    formAdd.style.visibility = "hidden";
    formBuscar.style.display = "none";
    formAdd.style.display = "none";
    let dbcontactos=localStorage.getItem("contactos")
    let contactos = JSON.parse(dbcontactos)
    if (contactos == null) {
        contactos = []
    }
    let mostrarContactos = document.getElementById("table")
    for(let i=0; i<contactos.length; i++){
        let fila = mostrarContactos.insertRow(1)
        let celdaNombre = fila.insertCell(0)
        let celdaTelefono = fila.insertCell(1)
        let celdaEmail = fila.insertCell(2)
        celdaNombre.innerHTML = contactos[i].nombre
        celdaTelefono.innerHTML = contactos[i].telefono
        celdaEmail.innerHTML = contactos[i].email
        //botones
        let celdaBoton = fila.insertCell(3)
        let btnEditar = document.createElement("button")
        btnEditar.innerHTML = "Editar"
        btnEditar.setAttribute("class", "btn btn-warning")
        btnEditar.setAttribute("id", "btnEditar")
        celdaBoton.appendChild(btnEditar)
        let celdaBoton2 = fila.insertCell(3)
        let btnEliminar = document.createElement("button")
        btnEliminar.innerHTML = "Eliminar"
        btnEliminar.setAttribute("class", "btn btn-danger")
        btnEliminar.setAttribute("id", "btnEliminar")
        celdaBoton2.appendChild(btnEliminar)

    }



});

btnCerrar.addEventListener('click', (e) => {

    formMostrar.style.display = "none";
    formBuscar.style.display = "none";
    formAdd.style.display = "none";

})
