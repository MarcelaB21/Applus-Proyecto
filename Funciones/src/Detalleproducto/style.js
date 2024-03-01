// Datos de productos almacenados

const productos = [
    { nombre: 'Alicate', existencia: 15 },
    { nombre: 'Clavos', existencia: 200 },
    { nombre: 'Cemento', existencia: 500 },
    { nombre: 'Taladro', existencia: 11 },
    { nombre: 'Cables de Goma', existencia: 5 },
];
    

    // Función para generar las filas de la tabla HTML con la información de los productos almacenados en el array 
    function mostrarExistencias() {
        const tbody = document.getElementById('tbodyExistencias');
        tbody.innerHTML = ''; // Limpiar contenido anterior de la tabla

        // La función 'forEach' itera sobre cada elemento del array y crea una fila de la tabla con las propiedades 
        productos.forEach(producto => {
            const fila = `<tr>
                             <td>${producto.nombre}</td>
                             <td>${producto.existencia}</td>
                         </tr>`;
            tbody.innerHTML += fila;
            // Después agrega estas filas al cuerpo de la tabla 
        });
    }

    // La siguiente función se ejecutará cuando se haga clic en el botón de búsqueda 
    function buscarExistencia() {
        const inputBusqueda = document.getElementById('inputBusqueda').value.toLowerCase();
        // Al obtener el valor de la entrada, lo convierte en minúsculas 
        const tbody = document.getElementById('tbodyExistencias');
        tbody.innerHTML = ''; // Limpiar contenido anterior de la tabla

        // Itera sobre los productos del array 
        productos.forEach(producto => {
            if (producto.nombre.toLowerCase().includes(inputBusqueda)) {
                const fila = `<tr>
                                  <td>${producto.nombre}</td>
                                  <td>${producto.existencia}</td>
                              </tr>`;
                tbody.innerHTML += fila;
                // Si es correcto, se crea una fila de la tabla con la información almacenada del producto  

                  // Una vez que se haya realizado la búsqueda, mostramos la tabla
            document.getElementById("tablaExistencias").style.display = "table";
            }
        });
    }



    // La siguiente línea de código permite que cuando la página se cargue por completo, se llame a la función mostrarExistencias()
    window.onload = mostrarExistencias;