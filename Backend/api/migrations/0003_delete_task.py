# Generated by Django 5.0.3 on 2024-03-23 06:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_task_delete_producto'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Task',
        ),
    ]
