from .views import RegisterView,LoginView,get_csrf_token
from django.urls import path

urlpatterns = [
    path('register/', RegisterView.as_view(),name='register'),
    path('login/', LoginView.as_view(),name='Login'),
    path('csrf/',get_csrf_token,name='getcsrftoken')
    
]