from django.shortcuts import render

# Create your views here.
from django.contrib.auth import authenticate, login
from django.http import JsonResponse

def login_view(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        # Autenticar al usuario utilizando el correo electrónico y contraseña
        user = authenticate(request, email=email, password=password)

        if user is not None:
            # Las credenciales son válidas, iniciar sesión para el usuario
            login(request, user)
            return JsonResponse({'message': 'Authentication successful'})
        else:
            # Las credenciales son inválidas
            return JsonResponse({'error': 'Invalid credentials'}, status=400)

    # Método de solicitud no válido
    return JsonResponse({'error': 'Invalid request method'}, status=405)
