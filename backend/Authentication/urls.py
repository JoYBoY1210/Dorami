from .views import RegisterView,LoginView,get_csrf_token,get_user
from django.urls import path

urlpatterns = [
    path('register/', RegisterView.as_view(),name='register'),
    path('login/', LoginView.as_view(),name='Login'),
    path('csrf/',get_csrf_token,name='getcsrftoken'),
    path('getUser/',get_user,name='getUser')
    
]