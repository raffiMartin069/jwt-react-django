from rest_framework_simplejwt.authentication import JWTAuthentication
from django.http import HttpRequest, JsonResponse
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate
from rest_framework.views import APIView

import json


class AuthenticationView(APIView):

    authentication_classes = [JWTAuthentication]
    permission_classes = [AllowAny]

    def post(self, request: HttpRequest) -> JsonResponse:
        
        data = request.data

        user = authenticate(username=data['username'], password=data['password'])

        content: dict = {
            'messages': 'User authenticated successfully!',
            'user': {
                'username': user.username,
                'id': user.id,
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'is_active': user.is_active,
                'is_staff': user.is_staff,
                'is_superuser': user.is_superuser,
                'last_login': user.last_login,
                'date_joined': user.date_joined,
            }
        }

        return JsonResponse(content, safe=True, status=200)
    