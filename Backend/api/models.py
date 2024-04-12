from django.db import models
from django.contrib.auth.models import AbstractBaseUser

class User(AbstractBaseUser):
    username = None
    id = models.IntegerField(primary_key=True)
    email = models.CharField(max_length=255, unique = True)
    first_name = models.CharField(max_length = 255)
    second_name = models.CharField(max_length=255)
    isBuyer = models.BooleanField(default = False)
    isSeller = models.BooleanField(default = False)
    organization = models.CharField(max_length=255)
    role = models.CharField(max_length=255)
    lastSession = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD= 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.id


    
class order(models.Model):
    idOrder = models.IntegerField(primary_key=True)
    idBuyer = models.ForeignKey(User, on_delete=models.CASCADE)
    quality = models.CharField(max_length = 255)
    amount = models.IntegerField()
    price = models.FloatField()
    destiny = models.CharField(max_length=255)
    type = models.SmallIntegerField()

    def __str__(self):
        return self.idOrder

    
class recolection(models.Model):
    idRecolection = models.IntegerField(primary_key=True)
    date = models.DateTimeField()
    place = models.CharField(max_length = 255)
    owner = models.CharField(max_length = 255)
    amount = models.FloatField()
    idOrder = models.ForeignKey(order, on_delete = models.CASCADE)

class Task(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    completed = models.BooleanField(default=False)
