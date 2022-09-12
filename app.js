
const btnagregarContacto = document.getElementById("btnAgregarContacto");
const btnbuscarContacto = document.getElementById("btnbuscarContactos");
const btnMostrarContactos = document.getElementById("btnMostrarContactos");
const btnCerrar = document.getElementById("btnCerrar");
const formAdd = document.getElementById("addNewContact");
const formBuscar = document.getElementById("lfContacts");
const formMostrar = document.getElementById("showContacts");
const guardarContacto = document.getElementById("agregarNuevo")
const cancelarGuardarContacto = document.getElementById("cancelarContacto")

btnbuscarContacto.addEventListener("click", () => {
    formBuscar.style.display = "block";
    formBuscar.style.visibility = "visible";
    formMostrar.style.visibility = "hidden";
    formAdd.style.visibility = "hidden";
    formAdd.style.display = "none";
    formMostrar.style.display = "none";
    const enviarBusqueda = document.getElementById("enviarBuscar")
    formBuscar.style.display = "block";
    formAdd.style.display = "none";
    formMostrar.style.display = "none";
    const contactos = JSON.parse(localStorage.getItem("contactos"));
    console.log(contactos)
    enviarBusqueda.addEventListener("click", (e) => {
        const busqueda = document.getElementById("busqueda").value
        e.preventDefault(e);

let valorbusqueda=  busqueda.split("")[0].toUpperCase() + busqueda.split("").slice(1).join("").toLowerCase() 


   console.log(valorbusqueda)
        let busquedaContactos = [];
        for (let i = 0; i < contactos.length; i++) {
            if (valorbusqueda == contactos[i].nombre) {
                e.preventDefault(e);
                busquedaContactos.push(contactos[i])
                formBuscar.style.display = "block";
                formBuscar.style.visibility = "visible";
                formMostrar.style.visibility = "visible";
                formMostrar.style.display = "block";

                let table = document.getElementById("table")
                table.innerHTML = ""

                table.innerHTML += `
                <tr>
                <th>Nombre</th>
                <th>Telefono</th>
                <th>Email</th>
                </tr>
               `
                for (let i = 0; i < busquedaContactos.length; i++) {
                    table.innerHTML += `
            <tr>
            <td>${busquedaContactos[i].nombre}</td>
            <td>${busquedaContactos[i].telefono}</td>
            <td>${busquedaContactos[i].email}</td>
              </tr>
            `  

                    
                }  return  ;
              

            } 
           

        } 
            swal("No se encontro alguna coincidencia", "", "warning");
            e.preventDefault(e);
        
    });
});

const mostrarMenu = () => {
    formMostrar.style.display = "none";
    formBuscar.style.display = "none";
    formAdd.style.display = "none";

}

mostrarMenu();



btnagregarContacto.addEventListener('click', () => {


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
        let dbcontactos = localStorage.getItem("contactos")
        let contactos = JSON.parse(dbcontactos)
        if (nombre == "" && telefono == "" && email == "") {
            swal("Ingrese todos los datos", " ", "warning")
            return e.preventDefault()

        } if (contactos == null) {
            contactos = []
        }
        contactos.push({ nombre: nombre, telefono: telefono, email: email })
            for(let i = 0; i < contactos.length; i++){
              let name= contactos[i].nombre[0].toUpperCase() + contactos[i].nombre.slice(1)
                contactos[i].nombre=name

            } 
            localStorage.setItem("contactos", JSON.stringify(contactos))
                console.log(contactos)
        swal("Contacto agregado")
        e.preventDefault()
        setTimeout(() => {
            location.reload();
        }, 1000);
    })

});


cancelarGuardarContacto.addEventListener("click", (e) => {
    e.preventDefault();
    swal({
        title: "¿Estas seguro que deseas salir?",
        text: "Estas apunto de salir, perderas toda la informacion",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("Saliste! ", {
                    icon: "success",

                }, location.reload()
                );
            } else {
                swal("Continua con tu registro");
            }
        });

});


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

    table.innerHTML += `
            <tr>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Acciones</th>
            
            </tr>
           `
    for (let i = 0; i < contactos.length; i++) {
        let nombre = contactos[i].nombre
        let telefono = contactos[i].telefono
        let email = contactos[i].email
        table.innerHTML += `
            
                
                <tr>
                <td>${nombre}</td>
                <td>${telefono}</td>
                <td>${email}</td>
                <td>
                <button class="btn btn-success" onclick="editarContacto(${i})">Editar</button>

                <button class="btn btn-danger" onclick="eliminarContacto(${i})">Eliminar</button></td>

                </tr>`


    }
});


btnCerrar.addEventListener("click", (e) => {
    swal("Gracias por usar nuestra app", "Cerrando sesion","success")
    localStorage.clear()
    setTimeout(() => {

        location.reload();
    }, 750);
})
;