from django.db import models

# Create your models here.


class UserModel(models.Model):
    username = models.CharField(max_length = 15, unique = True)
    password = models.CharField(max_length = 15)
    money = models.IntegerField(default = 10000)

    def __str__(self) -> str:
        return self.username