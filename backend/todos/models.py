from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Todo(models.Model):
    title=models.CharField(max_length=200)
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    description=models.TextField(null=True,blank=True)
    due_date=models.CharField(max_length=100000000000)
    created_at=models.DateTimeField(auto_now_add=True)
    label=models.CharField(max_length=20,null=True,blank=True)
    completed=models.BooleanField(default=False)

    def __str__(self):
        return self.title

