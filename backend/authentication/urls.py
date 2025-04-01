from django.urls import path

from .views import AuthenticationView, RegisterView

urlpatterns = [
    path("auth/", AuthenticationView.as_view(), name="auth"),
    path("signup/", RegisterView.as_view(), name="signup"),
]
