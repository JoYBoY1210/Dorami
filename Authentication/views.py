from django.contrib.auth.models import User
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import RegisterSerializer, TokenSerializer, LoginSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class Registerview(APIView):
    def post(self,request):
        serializer=RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message":"User created Successfully"},status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
class Loginview(APIView):
    def post(self,request):
        serializer=LoginSerializer(data=request.data)
        if serializer.is_valid():
            try:
                user=User.objects.get(username=serializer.validated_data['username'])
                if user.check_password(serializer.validated_data['password']):
                    refresh=RefreshToken.for_user(user)
                    return Response({'access':str(refresh.access_token),'refresh':str(refresh)},status=status.HTTP_200_OK)
                return Response({"detail":"invalid credentials"},status=status.HTTP_401_UNAUTHORIZED)
            except User.DoesNotExist:
                return Response({"detail":"user does not exist"},status=status.HTTP_404_NOT_FOUND)
