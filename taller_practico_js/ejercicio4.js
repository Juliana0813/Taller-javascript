const usuarios = [
    { nombre: "Carlos", edad: 20 },
    { nombre: "Juana", edad: 17 },
    { nonmbre: "Oliver", edad: 25 },
    { nombre: "Katherine", edad: 30 },
];

function filtrarYAgregarEdadEnDias(usuarios) {
    let mayoresDeEdad = usuarios.filter((usuario) => {
        return usuario.edad >= 18;
    });
    let usuariosConEdadEnDias = mayoresDeEdad.map((usuario) => {
        return {
            ...usuario, 
            edad_en_dias: usuario.edad * 365
        };
    });

    return usuariosConEdadEnDias;
}

console.log(filtrarYAgregarEdadEnDias(usuarios));
