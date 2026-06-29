# Comandos Utilizados en Git

### 🛠️ Configuración e Inicialización

*   **`git init`**
    *   **Definición:** Convierte un directorio existente en un nuevo repositorio de Git.
    *   **Caso de uso:** Creas una carpeta vacía llamada `mi-proyecto-web`, abres la terminal ahí y ejecutas el comando para empezar a controlar versiones desde cero.

*   **`git clone <url>`**
    *   **Definición:** Descarga una copia completa de un repositorio existente desde un servidor remoto.
    *   **Caso de uso:** Te unes a un nuevo equipo y descargas todo el código de la app desde GitHub para empezar a trabajar en tu compu.

*   **`git config`**
    *   **Definición:** Define configuraciones a nivel de usuario o proyecto (como tu nombre y correo).
    *   **Caso de uso:** Instalas Git en una compu nueva y configuras tu nombre con `git config --global user.name "Tu Nombre"` para firmar tus commits.

---

### 📝 Cambios y Confirmaciones

*   **`git status`**
    *   **Definición:** Muestra el estado actual de tus archivos (modificados, listos para guardar o sin rastrear).
    *   **Caso de uso:** Regresas de almorzar, no recuerdas qué modificaste y lo ejecutas para ver tus cambios pendientes.

*   **`git add <archivo>`**
    *   **Definición:** Agrega archivos específicos al área de preparación (staging area).
    *   **Caso de uso:** Modificaste `estilos.css` e `index.html`, pero solo quieres guardar el diseño; usas `git add estilos.css`.

*   **`git add .`**
    *   **Definición:** Prepara absolutamente todos los archivos modificados o nuevos en tu directorio.
    *   **Caso de uso:** Creaste una función que movió 10 archivos y prefieres agregarlos todos juntos en un solo paso.

*   **`git commit -m "mensaje"`**
    *   **Definición:** Guarda permanentemente los cambios preparados en tu historial local con un mensaje.
    *   **Caso de uso:** Terminaste el formulario de contacto y ejecutas `git commit -m "Agrega formulario de contacto"` para salvar ese hito.

*   **`git commit -am "mensaje"`**
    *   **Definición:** Combina `git add` y `git commit` en un solo paso para archivos ya rastreados.
    *   **Caso de uso:** Corriges un error de dedo rápido en un archivo existente y ahorras tiempo haciendo todo en una sola línea.

*   **`git diff`**
    *   **Definición:** Muestra exactamente qué líneas de código han cambiado comparado con tu último commit.
    *   **Caso de uso:** Rompiste una función que sí servía; lo usas para ver qué línea borraste o modificaste por error.

---

### 🌿 Ramificación (Branching)

*   **`git branch`**
    *   **Definición:** Lista todas las ramas locales de tu proyecto.
    *   **Caso de uso:** Trabajas en un proyecto grande y verificas si estás parado en la rama `main` o en `develop`.

*   **`git branch <nombre>`**
    *   **Definición:** Crea una nueva rama a partir de tu posición actual.
    *   **Caso de uso:** Te piden un sistema de comentarios y ejecutas `git branch funciones-comentarios` para apartar ese espacio de trabajo.

*   **`git checkout <nombre>`**
    *   **Definición:** Cambia tu directorio de trabajo a la rama especificada.
    *   **Caso de uso:** Terminaste en la rama de diseño y te pasas a `main` para revisar la versión oficial del proyecto.

*   **`git checkout -b <nombre>`**
    *   **Definición:** Crea una rama nueva y salta a ella inmediatamente.
    *   **Caso de uso:** Explota un error urgente en vivo y creas/te mueves rápido a `hotfix-error-login` para arreglarlo en caliente.

*   **`git merge <rama>`**
    *   **Definición:** Fusiona los cambios de una rama especificada en tu rama activa actual.
    *   **Caso de uso:** Probaste la barra de navegación en `nueva-nav`, jala chido, te pasas a `main` y haces `git merge nueva-nav`.

---

### 🌍 Sincronización Remota

*   **`git remote add origin <url>`**
    *   **Definición:** Vincula tu repositorio local con un repositorio remoto en GitHub o GitLab.
    *   **Caso de uso:** Creaste un proyecto local, haces un repo vacío en GitHub y usas este comando para conectar tu compu con la nube.

*   **`git push origin <rama>`**
    *   **Definición:** Sube tus commits locales hacia el repositorio remoto.
    *   **Caso de uso:** Terminaste tu chamba del día y mandas tus avances con `git push origin mi-rama` para que tu equipo los revise.

*   **`git pull`**
    *   **Definición:** Descarga y aplica los cambios más recientes del repositorio remoto a tu carpeta local.
    *   **Caso de uso:** Llegas por la mañana y lo ejecutas para bajar los cambios que tus compañeros subieron mientras dormías.

---

### 🔄 Historial y Recuperación

*   **`git log`**
    *   **Definición:** Despliega todo el historial de commits de la rama actual en orden cronológico.
    *   **Caso de uso:** El cliente pregunta cuándo se puso la pasarela de pagos; revisas el historial para ver la fecha exacta y quién la hizo.

*   **`git stash`**
    *   **Definición:** Guarda temporalmente los cambios actuales sin hacer commit para poder cambiar de rama.
    *   **Caso de uso:** Dejas algo a medias, surge una emergencia en otra rama, ocultas tu código incompleto con esto y te mueves sin perder nada.

*   **`git reset <archivo>`**
    *   **Definición:** Saca un archivo del área de preparación (staging) sin perder tus modificaciones en el código.
    *   **Caso de uso:** Metiste por accidente un archivo confidencial `.env` con un `git add .`; usas `git reset .env` para sacarlo del grupo que se va a guardar.
