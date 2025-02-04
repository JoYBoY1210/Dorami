from .models import Todo
from rest_framework import serializers

class Todoserializer(serializers.ModelSerializer):
    class Meta:
        model=Todo
        fields=['title','user','description','due_date','created_at']
        read_only_fields=['created_at','user']
