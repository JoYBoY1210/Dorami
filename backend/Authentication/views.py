from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.models import User
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from django.middleware.csrf import get_token
from .serializers import RegisterSerializer, LoginSerializer

# views.py
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import JsonResponse

@ensure_csrf_cookie  # 👈 Forces Django to send the CSRF cookie
def get_csrf_token(request):
    return JsonResponse({"status": "CSRF cookie set"})

class RegisterView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        print("Endpoint hit")
        
        csrf_token = get_token(request)  
        print(f"CSRF Token: {csrf_token}")

        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        print("Login request received")
        serializer = LoginSerializer(data=request.data)
        
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']

            try:
                user = User.objects.get(email=email)

                if user.check_password(password):
                    login(request, user)  

                    response = Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
                    
                    response.set_cookie(
                        'sessionid', request.session.session_key,  
                        httponly=False,  
                        secure=False,  
                        samesite='strict',  
                        max_age=60*60*24*30  
                    )

                    response.set_cookie(
                        'csrftoken', get_token(request),  
                        httponly=False,  
                        secure=False,  
                        samesite='strict',  
                        max_age=60*60*24*30 
                    )

                    print("Session started, Cookies set:", response.cookies)  
                    return response

                return Response({"detail": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
            
            except User.DoesNotExist:
                return Response({"detail": "User does not exist"}, status=status.HTTP_404_NOT_FOUND)
        
        print("Invalid data:", serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



