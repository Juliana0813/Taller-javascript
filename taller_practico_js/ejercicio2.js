function calcularDatos(productos) {
    const { sumaPrecios, Total } = productos.reduce(
      (acumulador, producto) => ({
        sumaPrecios: acumulador.sumaPrecios + producto.precio,
        Total: acumulador.Total + 1,
      }),
      { sumaPrecios: 0, Total: 0 }
    );
  
    const ProductoMasCostoso = productos
      .sort((a, b) => b.precio - a.precio)[0].nombre;
  
    return {
      sumaPrecios,
      Total,
      ProductoMasCostoso
    };
  }
  
  const productos = [
    { id_product:1, nombre: 'Camiseta', precio: 40000, stock: 79 },
    { id_product:2, nombre: 'Pantalón', precio: 70000, stock: 53 },
    { id_product:3, nombre: 'Chaqueta', precio: 100000, stock: 30 },
    { id_product:4, nombre: 'Correa', precio: 90000, stock: 98 },
  ];
  
  const resultado = calcularDatos([...productos]);
  
  console.log(`Suma de precios: ${resultado.sumaPrecios}`);
  console.log(`Cantidad total de productos: ${resultado.Total}`);
  console.log(`Producto más costoso: ${resultado.ProductoMasCostoso}`);