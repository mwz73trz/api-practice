from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=70, blank=False, default='')
    description = models.CharField(max_length=200, blank=False, default='')
    completed = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.title}'

