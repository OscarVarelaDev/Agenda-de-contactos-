

const btnagregarContacto = document.getElementById("btnAgregarContacto");
const btnbuscarContacto = document.getElementById("btnbuscarContactos");
const btnMostrarContactos = document.getElementById("btnMostrarContactos");
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



btnagregarContacto.addEventListener('click', () => {

   
    formAdd.style.display = "block";
    formAdd.style.visibility = "visible";
    formBuscar.style.visibility = "hidden";
    formMostrar.style.visibility = "hidden";
    formBuscar.style.display = "none";
    formMostrar.style.display = "none"

    guardarContacto.addEventListener("click", () => {


        let nombre = document.getElementById("nombre").value;
        let telefono = document.getElementById("telefono").value;
        let email = document.getElementById("email").value;
        let dbcontactos = localStorage.getItem("contactos")
        let contactos = JSON.parse(dbcontactos)
        if(nombre==""&& telefono==""&& email==""){
             return alert("Por favor ingrese todos los datos")

        }if(contactos == null) {
            contactos = []
        } contactos.push({ nombre, telefono, email })
        localStorage.setItem("contactos", JSON.stringify(contactos))
        console.log(contactos)
        swal("Contacto agregado")
    });
})

    btnMostrarContactos.addEventListener("click", () => {

            formMostrar.style.display = "block";
            formMostrar.style.visibility = "visible";
            formBuscar.style.visibility = "hidden";
            formAdd.style.visibility = "hidden";
            formBuscar.style.display = "none";
            formAdd.style.display = "none";
            let dbcontactos = localStorage.getItem("contactos")
            let contactos = JSON.parse(dbcontactos)
            if (contactos == null) {
                contactos = []
            }
          //  let showContacts = document.getElementById("showContacts")
           // showContacts.innerHTML = ""

            let table = document.getElementById("table")
            table.innerHTML = ""
           
            for (let i = 0; i < contactos.length; i++) {
                let nombre = contactos[i].nombre
                let telefono = contactos[i].telefono
                let email = contactos[i].email
                table.innerHTML += `
                <tr>
                <th>Nombre</th>
                <th>Telefono</th>
                <th>Email</th>
                <th>Acciones</th>
                
                </tr>
                
                <tr>
                <td>${nombre}</td>
                <td>${telefono}</td>
                <td>${email}</td>
                <td>
                <button class="btn btn-success" onclick="editarContacto(${i})">Editar</button>

                <button class="btn btn-danger" onclick="eliminarContacto(${i})">Eliminar</button></td>

                </tr>` 


            }
        })  
            
           