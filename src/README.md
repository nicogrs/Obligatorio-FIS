# Instrucciones 
### Pasos para levantar el programa:
Para poder correr el programa, luego de hacer npm install en la carpeta /src, hay que ejecutar el comando 'node app.js'.
Luego en el navegador, acceder a http://localhost:3000/.


## Funciones implementadas 

**Registro de un trabajo de tipo flete o reparto:**
En la sección de "CREAR TRABAJO" se podra testear esta implementación. En la misma se debe seleccionar el tipo de trabajo. Se deben completar los campos solicitados y una vez creado el trabajo, si no hay errores, se podran ver en la pàgina de inicio.

**Asignar camión a un trabajo:** En la sección de buscar un trabajo, encontraran todos los trabajos creados, ahi mismo podrán editar un trabajo que seleccionen, donde podran cambiar el estado del trabajo entre Pendiente, En curso, Finalizado, Cancelado. O podrán cambiar un camión para un trabajo ya creado. 

Luego tendrán otras funcionalidades como un tabla de camiones, o tabla de choferes.

---
### Los requerimientos que debíamos implementar eran los siguientes: 
---

RF#006 - Registro de un trabajo de tipo flete:
    Implica que tenemos que tener la lista de fletes, camiones y choferes.
    Al clickear en boton de registro, llevar a página de registro, permitir solo las elecciones anteriores.

RF#007 - Registro de un trabajo de tipo reparto
    Implica que tenemos que tener la lista de fletes, camiones y choferes.
    Al clickear en boton de registro, llevar a página de registro, permitir solo las elecciones anteriores.
    Tiene que haber un objeto que sea de tipo envio, uno reparto y otro flete.

RF#011 - Asignar camión a un trabajo
    Implica que tenemos que tener la lsita de camiones previamente cargada.
    Al clickear en boton de asignar, llevar a página de asignacion, permitir solo las elecciones anteriores.

RF#012 - Selección de estado un trabajo
    Implica que tenemos que tener la lista de trabajos con los objetos actualizados.
    Al clickear en la lista de opciones de estados, se debe actualizar en la base de datos.

RF#015 - Funcionalidad de búsqueda de trabajo.
    Implica que tenemos que tener la lista de trabajos con los objetos actualizados.
    Al clickear en el boton de buscar, se debe elegir por cuál campo se quiere buscar y luego ingresar el valor.