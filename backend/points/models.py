from django.db import models
from colorfield.fields import ColorField
from ckeditor.fields import RichTextField


class Point(models.Model):
    name = models.CharField(max_length=80)
    color = ColorField(default='#FF0000')
    beacon_address = models.CharField(max_length=80)
    image = models.ImageField()
    text = RichTextField()

    def __str__(self):
        return self.name
