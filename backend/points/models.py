from django.db import models
from colorfield.fields import ColorField
from ckeditor.fields import RichTextField


class Point(models.Model):
    name = models.CharField(max_length=80, verbose_name='Nome')
    color = ColorField(default='#FF0000', verbose_name='Colore Beacon')
    beacon_address = models.CharField(max_length=80, verbose_name='Indirizzo Beacon')
    image = models.ImageField(verbose_name='Immagine')
    text = RichTextField(verbose_name='Testo novità')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Punto di interesse'
        verbose_name_plural = 'Punti di interesse'
