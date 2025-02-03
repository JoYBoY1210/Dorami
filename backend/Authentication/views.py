from django.contrib.auth.models import User
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny
from .serializers import RegisterSerializer, TokenSerializer, LoginSerializer
from django.middleware.csrf import get_token


class Registerview(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        print("Endpoint hit")
        
        
        csrf_token = get_token(request)
        print(f"CSRF Token: {csrf_token}")

        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()

            
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)
            refresh_token = str(refresh)

            response = Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)

            
            response.set_cookie(
                'access_token', access_token, 
                httponly=True,  
                secure=False,    
                samesite='Strict',  
                max_age=60*60*24*30  
            )
            response.set_cookie(
                'refresh_token', refresh_token, 
                httponly=True,  
                secure=False,    
                samesite='Strict',  
                max_age=60*60*24*30  
            )
            return response
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Loginview(APIView):

    permission_classes = [AllowAny]



    def post(self, request):
        print("Login request received")
        serializer = LoginSerializer(data=request.data)
        
        if serializer.is_valid():
            try:
                user = User.objects.get(email=serializer.validated_data['email'])
                
                if user.check_password(serializer.validated_data['password']):
                    refresh = RefreshToken.for_user(user)
                    access_token = str(refresh.access_token)
                    refresh_token = str(refresh)

                    response = Response({'message': 'Login successful'}, status=status.HTTP_200_OK)

                    response.set_cookie(
                        'access_token', access_token, 
                        httponly=True,  
                        secure=False,  
                        samesite='Lax',  
                        max_age=60*60*24*7  
                    )

                    response.set_cookie(
                        'refresh_token', refresh_token, 
                        httponly=True,  
                        secure=False,  
                        samesite='Lax',  
                        max_age=60*60*24*7  
                    )

                    print("Cookies set:", response.cookies)  
                    return response

                return Response({"detail": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
            
            except User.DoesNotExist:
                return Response({"detail": "User does not exist"}, status=status.HTTP_404_NOT_FOUND)
        
        print("Invalid data:", serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
