# Generated by Django 2.2.10 on 2020-02-16 19:37

import ckeditor.fields
import colorfield.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('points', '0003_point_name'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='point',
            options={'verbose_name': 'Punto di interesse', 'verbose_name_plural': 'Punti di interesse'},
        ),
        migrations.AlterField(
            model_name='point',
            name='beacon_address',
            field=models.CharField(max_length=80, verbose_name='Indirizzo Beacon'),
        ),
        migrations.AlterField(
            model_name='point',
            name='color',
            field=colorfield.fields.ColorField(default='#FF0000', max_length=18, verbose_name='Colore Beacon'),
        ),
        migrations.AlterField(
            model_name='point',
            name='image',
            field=models.ImageField(upload_to='', verbose_name='Immagine'),
        ),
        migrations.AlterField(
            model_name='point',
            name='name',
            field=models.CharField(max_length=80, verbose_name='Nome'),
        ),
        migrations.AlterField(
            model_name='point',
            name='text',
            field=ckeditor.fields.RichTextField(verbose_name='Testo novità'),
        ),
    ]
