Comandos Utilizados en Git

1.- git init: Convierte un directorio existente en un nuevo repositorio de Git.
Caso de uso: Creas una carpeta vacía en tu computadora llamada mi-proyecto-web, abres la terminal dentro de ella y ejecutas el comando para empezar a controlar sus versiones desde cero.
2.- git clone <url>: Descarga una copia completa de un repositorio existente desde un servidor remoto.
Caso de uso: Te unes a un nuevo equipo de trabajo y necesitas descargar todo el código de la aplicación de la empresa desde su repositorio de GitHub para empezar a trabajar en tu computadora.
3.- git config: Define configuraciones a nivel de usuario o proyecto (como tu nombre y correo electrónico).
Caso de uso: Acabas de instalar Git en una computadora nueva y configuras tu nombre (git config --global user.name "Tu Nombre") para que tus entregas de código queden firmadas a tu nombre.
4.- git status: Muestra el estado actual de tus archivos (cuáles están modificados, listos para guardar o sin rastrear).
Caso de uso: Regresas de almorzar, no recuerdas exactamente qué archivos modificaste antes de irte y ejecutas el comando para ver la lista de archivos con cambios pendientes. 
5.- git add <archivo>: Agrega archivos específicos al área de preparación (staging area) para el siguiente guardado.
Caso de uso: Modificaste estilos.css y index.html, pero solo quieres guardar los cambios de diseño. Usas git add estilos.css para preparar únicamente ese archivo.
6.- git add .: Prepara absolutamente todos los archivos modificados o nuevos en tu directorio.
Caso de uso: Creaste una función completa que requirió modificar 10 archivos al mismo tiempo y prefieres agregarlos todos juntos en un solo paso en lugar de ir uno por uno.
7.- git commit -m "mensaje": Guarda de forma permanente los cambios preparados en tu historial local, junto con un mensaje descriptivo.
Caso de uso: Terminaste de diseñar el formulario de contacto, ya preparaste los archivos y ejecutas git commit -m "Agrega formulario de contacto funcional" para guardar ese hito en tu historial. 
8.- git commit -am "mensaje": Combina git add y git commit en un solo paso para archivos previamente rastreados.
Caso de uso: Corregiste rápidamente una falta de ortografía en un archivo de texto que Git ya conoce; usas este comando para ahorrar tiempo preparando y guardando el cambio en una sola línea. 
9.- git diff: Muestra exactamente qué líneas de código han cambiado comparado con tu última confirmación.
Caso de uso: Rompiste una función que antes servía; ejecutas el comando para comparar tu código actual contra la última versión guardada y ver exactamente qué línea borraste o modificaste por error.
10.- git branch: Lista todas las ramas locales de tu proyecto.
Caso de uso: Trabajas en un proyecto grande y ejecutas el comando para verificar si estás parado en la rama de producción (main) o en la rama de desarrollo (develop).
11.- git branch <nombre>: Crea una nueva rama nueva a partir de tu posición actual.
Caso de uso: Tu jefe te pide programar un sistema de comentarios. Ejecutas git branch funciones-comentarios para apartar ese espacio de trabajo sin moverte de donde estás.
12.- git checkout <nombre>: Cambia tu directorio de trabajo a la rama especificada.
Caso de uso: Terminaste tu jornada en la rama de diseño y necesitas cambiarte a la rama main para revisar cómo va la versión oficial del proyecto.
13.- git checkout -b <nombre>: Crea una rama nueva y salta a ella inmediatamente.
Caso de uso: Surge un error urgente en la aplicación en vivo y necesitas crear e irte inmediatamente a una rama llamada hotfix-error-login para solucionarlo sin perder un segundo.
14.- git merge <rama>: Fusiona los cambios de una rama especificada en tu rama activa actual.
Caso de uso: Probaste la nueva barra de navegación en tu rama nueva-nav, todo funciona perfecto, te cambias a main y ejecutas git merge nueva-nav para integrar la barra al diseño definitivo.
15.-git remote add origin <url>: Vincula tu repositorio local con una dirección remota en plataformas como GitHub o GitLab.
Caso de uso: Creaste un proyecto increíble de forma local en tu computadora, vas a GitHub, creas un repositorio vacío en la nube y usas este comando para conectar tu computadora con ese servidor remoto.
16.- git push origin <rama>: Sube tus confirmaciones (commits) locales hacia el repositorio remoto.
Caso de uso: Terminaste tus tareas del día y envías tus avances locales ejecutando git push origin mi-rama para que tus compañeros puedan revisar tu código desde la plataforma en la nube.
17.- git pull: Descarga y aplica automáticamente los cambios más recientes del repositorio remoto a tu directorio actual.
Caso de uso: Llegas a la oficina por la mañana y ejecutas el comando para descargar todas las actualizaciones y mejoras que tus compañeros de equipo subieron al repositorio remoto mientras tú no estabas.
18.- git log: Despliega todo el historial de confirmaciones de la rama actual en orden cronológico.
Caso de uso: Un cliente te pregunta cuándo se implementó el sistema de pagos. Usas este comando para revisar la bitácora del proyecto, ver las fechas y quién hizo el commit exacto de esa función.
19.- git stash: Guarda temporalmente los cambios actuales (sin guardarlos definitivamente) para que puedas cambiar de rama sin perder tu trabajo.
Caso de uso: Estás a la mitad de una programación compleja con código incompleto (que aún no puedes guardar con commit) y te piden corregir un error urgente en otra rama. Usas el comando para ocultar temporalmente tus cambios, limpiar tu espacio de trabajo, cambiar de rama y luego recuperarlos.
20.- git reset <archivo>: Saca un archivo preparado (staged) del área de preparación sin perder el código modificado.
Caso de uso: Ejecutaste un git add . por accidente e incluiste un archivo de contraseñas confidenciales (.env). Usas git reset .env para sacarlo del grupo que se va a guardar, manteniéndolo a salvo en tu computadora.
