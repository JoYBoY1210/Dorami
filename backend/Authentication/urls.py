from .views import Registerview,Loginview
from django.urls import path

urlpatterns = [
    path('register/', Registerview.as_view(),name='register'),
    path('login/', Loginview.as_view(),name='Login'),
    
]