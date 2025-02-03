from django.urls import path
from .views import TodoListView,TodoDetailView,TodoCreateView

urlpatterns = [
    path('', TodoListView.as_view(),name='TodoList'),
    path('create/', TodoCreateView.as_view(),name='create'),
    path('<int:pk>/', TodoDetailView.as_view(),name='detail'),
    
]
