from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import LoginSerializer
from django.contrib.auth import authenticate, login

@api_view(['POST'])
def login_view(request):
    """
    Maneja las solicitudes POST para el inicio de sesión.
    """
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')
    
        user = authenticate(request, username=username, password=password)  # Autenticar al usuario

        if user is not None:
            if user.is_active:
                login(request, user)  # Autentica al usuario
                return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
            else:
                return Response({'message': 'User is deactivated.'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'message': 'Invalid username or password.'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_user_data(request):
    """
    Obtiene y retorna los datos de todos los usuarios registrados.
    """
    users = User.objects.all()  # Consulta todos los usuarios
    user_data_list = []

    for user in users:
        user_data = {
            'id': user.id,
            'username': user.username,
            'password': user.password,
        }
        user_data_list.append(user_data)

    return Response(user_data_list)