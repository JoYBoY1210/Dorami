from django.contrib.auth.models import User
from rest_framework import status, permissions
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny 


class muthview(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        print("muth")
        return Response(status=status.HTTP_200_OK, data={"message": "muth created Successfully"})