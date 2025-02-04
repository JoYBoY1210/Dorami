from .models import Todo
from rest_framework import serializers

class Todoserializer(serializers.ModelSerializer):
    class Meta:
        model=Todo
        fields=['id','title','user','description','due_date','created_at','label','completed']
        read_only_fields=['created_at','user']

class TodoCompletedSerializer(serializers.ModelSerializer):
    class Meta:
        model=Todo
        fields=['completed']        
