from django.contrib.auth.models import User
from rest_framework import status, permissions
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import RegisterSerializer, TokenSerializer, LoginSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny 


@method_decorator(csrf_exempt, name='dispatch')

class Registerview(APIView):
    permission_classes=[AllowAny]
    def post(self, request):
        print("endpoint hitted")
        return Response(status=status.HTTP_200_OK, data={"message": "User created Successfully"})
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User created Successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



    

class Loginview(APIView):
    def post(self, request):
        print("muth")
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            try:
                # user = User.objects.get(email=serializer.validated_data['username'])
                user = User.objects.get(email=serializer.validated_data['email'])
                
                if user.check_password(serializer.validated_data['password']):
                    refresh = RefreshToken.for_user(user)
                    access_token = str(refresh.access_token)
                    refresh_token = str(refresh)

                    response = Response({'message': 'Login successful'}, status=status.HTTP_200_OK)

                    response.set_cookie(
                        'access_token', access_token, 
                        httponly=True,  
                        secure=True,    
                        samesite='Strict',  
                        max_age=60*60*24*7  
                    )

                    response.set_cookie(
                        'refresh_token', refresh_token, 
                        httponly=True,  
                        secure=True,    
                        samesite='Strict',  
                        max_age=60*60*24*7  
                    )

                    return response

                return Response({"detail": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
            
            except User.DoesNotExist:
                return Response({"detail": "User does not exist"}, status=status.HTTP_404_NOT_FOUND)
        
        
        print("Invalid data:", serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
