from rest_framework import routers
from django.urls import path
from .viewsets import *
from . import views

router = routers.SimpleRouter()
router.register('books', BookViewSet)
router.register('proveedores', ProveedorViewSet)
router.register('categorias', CategoriaViewSet)
router.register('productos', ProductoViewSet)
router.register('clientes', ClienteViewSet)
router.register('ventas', VentaViewSet)
router.register('detalles-venta', DetalleVentaViewSet)

urlpatterns = router.urls + [
    path('login/', views.login_view, name='login'),
]