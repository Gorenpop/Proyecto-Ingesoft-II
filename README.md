# Proyecto-Ingesoft-II: Versión II

**Descripción:**

Esta es la versión II del proyecto de Ingesoft, desarrollado con Django (backend) y React (frontend). El proyecto se basa en una arquitectura RESTful, con comunicación entre el backend y el frontend mediante peticiones HTTP utilizando Axios.

**Estructura del proyecto:**

* **Carpeta `backend`:** Contiene el código fuente del backend desarrollado en Django.
* **Fichero `requirements.txt`:** Lista las dependencias de Python necesarias para el backend.
* **Fichero `manage.py`:** Script para gestionar el proyecto Django.
* **Carpeta `frontend`:** Contiene el código fuente del frontend desarrollado en React.
* **Fichero `package.json`:** Lista las dependencias de JavaScript necesarias para el frontend.
* **Fichero `index.html`:** Página principal del frontend.
* **Carpeta `src`:** Contiene los componentes y demás código JavaScript del frontend.

**Tecnologías:**

* **Backend:**
    * Django (Python)
    * Entorno virtual Python
    * PostgreSQL (base de datos)
    * Gunicorn (servidor web)
* **Frontend:**
    * React (JavaScript)
    * Webpack (bundler)
    * Babel (compilador)
    * Axios (biblioteca HTTP)

**Instrucciones de uso:**

1. **Clonar el repositorio:**

```
git clone https://github.com/tu_usuario/Proyecto-Ingesoft-II.git
```

2. **Instalar dependencias:**

* **Backend:**
    * Crear un entorno virtual Python e instalar las dependencias con `pip install -r requirements.txt`.
* **Frontend:**
    * Instalar las dependencias con `npm install`.

3. **Ejecutar el backend:**

```
python manage.py runserver
```

4. **Ejecutar el frontend:**

```
npm start
```

5. **Acceder a la aplicación:**

Abrir la URL `http://localhost:8000` en un navegador web.

