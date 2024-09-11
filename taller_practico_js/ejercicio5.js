let products = [
    { id_product: 1, nombre: 'Camiseta', precio: 40000, stock: 79 },
    { id_product: 2, nombre: 'Pantalón', precio: 70000, stock: 53 },
    { id_product: 3, nombre: 'Chaqueta', precio: 100000, stock: 30 },
    { id_product: 4, nombre: 'Correa', precio: 90000, stock: 98 },
];

function filtrarYAgregarImpuestoYTotal(productos) {
    let productosFiltrados = productos.filter((producto) => {
        return producto.precio > 80000 && producto.stock < 100;
    });

    let productosConImpuesto = productosFiltrados.map((producto) => {
        const impuesto = producto.precio * 0.19;
        return {
            ...producto,
            product_tax_value: impuesto, 
            product_total_value: producto.precio + impuesto 
        };
    });

    return productosConImpuesto;
}
console.log(filtrarYAgregarImpuestoYTotal(products));
