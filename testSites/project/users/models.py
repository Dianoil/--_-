from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _


class Role(models.TextChoices):
    User = 'userDouble', 'ЮзерДабл',
    Administr = 'adminCalc', 'Администратор'


class User(AbstractUser):
    role = models.CharField(max_length=15, choices=Role.choices,
                            default=Role.User
                            )
    email = models.EmailField(_('email address'),
                              unique=True, )
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
