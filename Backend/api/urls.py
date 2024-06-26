from django.urls import path
from . import views
from .views import RegisterView


urlpatterns = [
    path('hello-world/', views.hello_world, name='hello_world'),
    path('create-task/', views.create_task),
    path('delete-task/<int:pk>/', views.delete_task),
    path('', views.home),
    path('api/register/', RegisterView.as_view()),
]
