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
source env/Scripts/activate
```

Install dependencies
```bash
pip install -r requirements.txt
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
