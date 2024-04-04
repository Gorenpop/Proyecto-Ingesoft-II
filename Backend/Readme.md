# Backend in django

## Installation
Clone the repository
```bash
git clone https://github.com/Gorenpop/Proyecto-Ingesoft-II.git
```

Create a virtual environment

```bash
python -m venv env
```
Activa el entorno virtual, esto va adepender de la plataforma que uses para sistemas basdos en UNIX usa:
```bash
env\Scripts\activate 
```

Install dependencies
```bash
pip install -r requeriments.txt
```

Run migrations in local sqlite database
```bash
python manage.py migrate
```

Create superuser
```bash
python manage.py createsuperuser
```

Start local development server
```bash
python manage.py runserver
```

comando para veríficar que mi vm si está en funcionamiento
```bash
ps aux | grep runserver
```
para pararse y activar el env de mi vm
```bash
source env/bin/activate
```
para activar la vm a través de tmux
```bash
tmux
cd ~/Proyecto-Ingesoft-II/Backend
$(which python) manage.py runserver 0.0.0.0:8000
```
```bash
intenta ejecutar el comando freeze correctamente para generar o actualizar el archivo requirements.txt:
pip freeze > requirements.txt

```