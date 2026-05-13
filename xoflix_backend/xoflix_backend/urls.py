"""
URL configuration for xoflix_backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from users_app import views as users_views
from api_app import views as api_views

urlpatterns = [
    path('admin/', admin.site.urls),

    # User registration
    path('api/register/', users_views.register),

    # JWT authentication
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # CRUD endpoints
    path('api/notes/', api_views.get_notes),
    path('api/notes/create/', api_views.create_note),
    path('api/notes/delete/<int:pk>/', api_views.delete_note),
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path('admin/', admin.site.urls),
    path('api/', include('users_app.urls')),
]
