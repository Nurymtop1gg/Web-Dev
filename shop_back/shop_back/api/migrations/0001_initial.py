# Generated by Django 4.1.7 on 2023-04-01 09:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('price', models.FloatField()),
                ('description', models.TextField(blank=True)),
                ('count', models.IntegerField()),
                ('is_active', models.BooleanField()),
                ('cat', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='api.category')),
            ],
        ),
    ]