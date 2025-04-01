from django.http import JsonResponse, HttpRequest
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User


class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request: HttpRequest) -> JsonResponse:
        # Extract the user data from the request
        user_data = request.data

        # Here you would typically create a new user in your database
        # For example:
        user = User.objects.create_user(**user_data)

        print(user)

        # Return a success response
        return JsonResponse({
            'message': 'User registered successfully!'
            }, safe=True, status=201)
    