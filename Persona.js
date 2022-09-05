
 class Persona {
    constructor(nombre, telefono,email) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setTelefono(telefono) {
        this.telefono = telefono;
    }
    setEmail(email) {
        this.email = email;
    }
    getNombre() {
        return this.nombre;
    }
    getTelefono() {
        return this.telefono;
    }
    getEmail() {
        return this.email;
    }

}
    export default Persona;
