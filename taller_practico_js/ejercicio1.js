function calcularTotales(productos) {
    
    const { precioTotal, stockTotal } = productos.reduce(
      (acumulador, producto) => ({
        precioTotal: acumulador.precioTotal + producto.precio,
        stockTotal: acumulador.stockTotal + (producto.precio * producto.stock)
      }),
      { precioTotal: 0, stockTotal: 0 }
    );
    
    return { precioTotal, stockTotal };
  }
  
  const productos = [
    { id_product:1, nombre: 'Camiseta', precio: 40000, stock: 79 },
    { id_product:2, nombre: 'Pantalón', precio: 70000, stock: 53 },
    { id_product:3, nombre: 'Chaqueta', precio: 100000, stock: 30 },
    { id_product:4, nombre: 'Correa', precio: 90000, stock: 98 },
  ];
  
  const resultado = calcularTotales([...productos]);
  
  console.log(`Suma de precios: ${resultado.precioTotal}`);
  console.log(`Valor total del stock: ${resultado.stockTotal}`); 