# Generated by Django 4.2.4 on 2023-09-01 07:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='React',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('mobile', models.IntegerField(null=True)),
                ('city', models.CharField(max_length=500)),
                ('state', models.CharField(max_length=500)),
            ],
        ),
    ]
