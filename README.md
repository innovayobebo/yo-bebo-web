# YoBebo · Web de presentación

Web estática con HTML, CSS y JavaScript. Sin instalaciones, frameworks ni dependencias externas.

## Archivos
- index.html: estructura y textos.
- styles.css: diseño y adaptación a móvil.
- script.js: año del pie de página y enlace de descarga configurable.
- logo-yobebo.jpeg: logo proporcionado por el equipo, usado en cabecera, pie de página e icono del navegador.

## Verla en el Mac
Descomprime el ZIP y abre index.html con Safari o Chrome. Mantén los archivos juntos.

## Publicar con GitHub Pages
1. Inicia sesión en github.com.
2. Crea un repositorio nuevo llamado yo-bebo-web. Selecciona Public y añade un README para crear la rama main. Un repositorio dedicado evita mezclar la web con el código móvil.
3. Dentro del repositorio, pulsa Add file > Upload files.
4. Arrastra los archivos de esta carpeta (no el ZIP ni la carpeta exterior). index.html debe quedar en la raíz del repositorio.
5. Pulsa Commit changes para guardar.
6. Abre Settings > Pages.
7. En Build and deployment > Source elige Deploy from a branch.
8. En Branch selecciona main y /(root). Pulsa Save.
9. Espera al despliegue y vuelve a Pages para abrir Visit site. La dirección habitual será https://TU-USUARIO.github.io/yo-bebo-web/.

Guía oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Personalizar antes de entregar
Esta versión se ha adaptado a los archivos Flutter enviados (pubspec.yaml y lib.zip): colores rosa/amarillo, cuatro juegos, dos idiomas y tema claro/oscuro. La vista de móvil es una ilustración HTML/CSS basada en el código, no una captura ejecutada. La pregunta es de ejemplo: los CSV no estaban en esos adjuntos; el logo se añadió posteriormente. No se ha ejecutado ni compilado Flutter.

Funciones descritas: Yo Nunca; Ask con jugadores e intensidad 1–5 (ajusta valores numéricos de los retos, no filtra las preguntas por dificultad); Impostor con mínimo tres jugadores y número configurable de impostores; Tabú con dos equipos, turnos de 60 segundos y cinco palabras prohibidas. La app permite elegir español/inglés y tema claro/oscuro; la página de presentación está escrita en español.

- Reemplaza logo-yobebo.jpeg por vuestro logo, o cambia sus referencias en index.html.
- Para usar una captura real, crea una carpeta imagenes, guarda captura.png y sustituye el bloque con clase phone por <img src="imagenes/captura.png" alt="Pantalla del juego YoBebo" style="width:270px;max-width:100%;border-radius:25px">.
- Edita el nombre del equipo o los textos en index.html.
- Cambia los colores al principio de styles.css.
- Pega el enlace real de descarga en enlaceDescarga, al principio de script.js. Si todavía no existe, conserva el valor vacío.
- Para descargar un APK desde esta web, añade el archivo como yo-bebo.apk en la raíz y utiliza "./yo-bebo.apk" como enlaceDescarga. No se ha incluido un APK en este proyecto.

Cada cambio guardado en main volverá a publicar la web. En GitHub puedes abrir un archivo y utilizar el lápiz para editarlo.

## Cambios de presentación solicitados
Nombre comercial: YoBebo. Equipo: Innovado Bebo. Precio: 0,99 €, pago único. La web anuncia español, inglés, italiano, francés y alemán según la información proporcionada; los archivos Flutter recibidos solo incluyen español e inglés. Esta modificación afecta a la presentación web, no añade traducciones al código de la app ni un sistema de cobro. El botón del plan dirige a disponibilidad; el enlace de tienda sigue pendiente.
