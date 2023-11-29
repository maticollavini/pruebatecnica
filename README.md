# Desarrollo de una Aplicación de Lista de Libros

El objetivo de esta prueba es diseñar e implementar una pequeña aplicación web de lista de libros utilizando las herramientas de tu elección.

Este proyecto busca probar tus habilidades en el manejo de interacciones con el usuario, gestión del estado, filtrado de datos y la estructuración del código.

Usa el archivo `books.json` para obtener los datos de los libros. Podés añadir más libros si lo deseas, siempre y cuando siga la misma estructura.

[Ver el archivo JSON](./books.json)
[Ver el diseño](./prueba-tecnica.png)

## Requisitos
Basado en el diseño proporcionado, la aplicación debe tener las siguientes características:

### Funcionalidad

1. **Visualización de Libros Disponibles**: La aplicación debe mostrar una lista de libros disponibles con su portada "cover". Al posar el mouse sobre un libro debe aparecer un botón para añadirlo a la lista de lectura.

2. **Creación de Lista de Lectura**: El usuario debe ser capaz de crear una lista de lectura a partir de los libros disponibles. En la UI debe quedar claro qué libros están en la lista de lectura y cuáles no. También debe ser posible eliminar un libro de la lista de lectura y que vuelva a mostrarse como disponible.

3. **Filtrado de Libros por Género y año**: Los usuarios deben poder filtrar la lista de libros disponibles por género, y se mostrará un contador con el número de libros disponibles, el número de libros en la lista de lectura y el número de libros disponibles en el género seleccionado.

4. **Sincronización de Estado**: Debe haber una sincronización del estado global que refleje el número de libros en la lista de lectura y el número de libros todavía disponibles. Si un libro se mueve de la lista de disponibles a la lista de lectura, el recuento de ambos debe actualizarse en consecuencia.

## Pluses (no obligatorios)

1. **Persistencia de Datos**: La aplicación debe persistir los datos de la lista de lectura en el almacenamiento local del navegador.(Local storage). Al recargar la página, la lista de lectura debe mantenerse.

2. **Despliegue**: La aplicación debe estar desplegada en algún servicio de hosting gratuito (Netlify, Vercel, etc) y debe ser accesible a través de una URL pública. Indica la URL en el README.

## Consejos sobre el código

1. **Estructura del código**: El código debe estar bien organizado y fácil de leer.

2. **Semántica HTML**: El HTML debe ser semántico y accesible.

3. **Pensando en equipo**: Prepara tu proyecto pensando que cualquier persona de tu equipo puede tener que trabajar en él en el futuro. (scripts en el package.json, mínima documentación en el README, comentarios en el código si es necesario, etc).

4. **Formatea tu código**: Asegúrate de que tu código está formateado de forma consistente. Puedes usar Prettier o cualquier otra herramienta que te guste.

## Desafíos adicionales

**¿Querés ir más allá?** Estos son algunos desafíos adicionales que podés intentar:

- Implementar una funcionalidad de búsqueda en la lista de libros disponibles.
- Hacé que tu diseño sea responsive.

## Entrevista

Si pasas a la siguiente fase, te pediremos que hagas una entrevista con nosotros. Durante la entrevista, te pediremos que expliques tu código y que hagas algunos cambios en el mismo.

- Nos tendrás que explicar el código que has escrito y las decisiones que has tomado.
- Haremos cambios en el JSON y tendrás que adaptar el código en vivo.
- Añadiremos un nuevo filtro a la aplicación y tendrás que implementarlo.

Buena suerte y ¡divertite programando!
