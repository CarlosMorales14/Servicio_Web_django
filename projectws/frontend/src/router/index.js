import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import ListBook from '@/components/Book/ListBook'
import EditBook from '@/components/Book/EditBook'
import EditCliente from '@/components/Farmacia/Clientes/EditCliente'
import DeleteProducto from '@/components/Farmacia/Producto/DeleteProducto'
import DeleteBook from '@/components/Book/DeleteBook'
import DeleteProveedor from '@/components/Farmacia/Proveedor/DeleteProveedor'
import DeleteCategoria from '@/components/Farmacia/Categoria/DeleteCategoria'
import DeleteCliente from '@/components/Farmacia/Clientes/DeleteCliente'
import CreateBook from '@/components/Book/CreateBook'
import CreateProveedor from '@/components/Farmacia/Proveedor/CreateProveedor'
import CreateCategoria from '@/components/Farmacia/Categoria/CreateCategoria'
import CreateProducto from '@/components/Farmacia/Producto/CreateProducto'
import CreateCliente from '@/components/Farmacia/Clientes/CreateCliente'

import ListCliente from '@/components/Farmacia/Clientes/ListCliente'
import ListDetalle from '@/components/Farmacia/Detalles/ListDetalle'
import ListVenta from '@/components/Farmacia/Venta/ListVenta'
import ListProductos from '@/components/Farmacia/Producto/ListProducto'
import ListProveedores from '@/components/Farmacia/Proveedor/ListProveedores'
import ListCategorias from '@/components/Farmacia/Categoria/ListCategoria'
import EditProveedor from '@/components/Farmacia/Proveedor/EditProveedor'
import EditCategoria from '@/components/Farmacia/Categoria/EditCategoria'
import EditProductos from '@/components/Farmacia/Producto/EditProducto'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/book',
      name: 'ListBook',
      component: ListBook
    },
    {
      path: '/producto',
      name: 'ListProductos',
      component: ListProductos
    },
    {
      path: '/proveedor',
      name: 'ListProveedores',
      component: ListProveedores
    },
    {
      path: '/categoria',
      name: 'ListCategorias',
      component: ListCategorias
    },
    {
      path: '/cliente',
      name: 'ListCliente',
      component: ListCliente
    },
    {
      path: '/detalle',
      name: 'ListDetalle',
      component: ListDetalle
    },
    {
      path: '/venta',
      name: 'ListVenta',
      component: ListVenta
    },
    {
      path: '/book/:bookId/edit',
      name: 'EditBook',
      component: EditBook
    },
    {
      path: '/cliente/:clienteId/edit',
      name: 'EditCliente',
      component: EditCliente
    },
    {
      path: '/proveedor/:proveedorId/edit',
      name: 'EditProveedor',
      component: EditProveedor
    },
    {
      path: '/categoria/:categoriaId/edit',
      name: 'EditCategoria',
      component: EditCategoria
    },
    {
      path: '/producto/:productoId/edit',
      name: 'EditProductos',
      component: EditProductos
    },
    {
      path: '/book/:bookId/delete',
      name: 'DeleteBook',
      component: DeleteBook
    },
    {
      path: '/cliente/:clienteId/delete',
      name: 'DeleteCliente',
      component: DeleteCliente
    },
    {
      path: '/proveedor/:proveedorId/delete',
      name: 'DeleteProveedor',
      component: DeleteProveedor
    },
    {
      path: '/categoria/:categoriaId/delete',
      name: 'DeleteCategoria',
      component: DeleteCategoria
    },
    {
      path: '/producto/:productoId/delete',
      name: 'DeleteProducto',
      component: DeleteProducto
    },
    {
      path: '/book/create',
      name: 'CreateBook',
      component: CreateBook
    },
    {
      path: '/cliente/create',
      name: 'CreateCliente',
      component: CreateCliente
    },
    {
      path: '/proveedor/create',
      name: 'CreateProveedor',
      component: CreateProveedor
    },
    {
      path: '/categoria/create',
      name: 'CreateCategoria',
      component: CreateCategoria
    },
    {
      path: '/producto/create',
      name: 'CreateProducto',
      component: CreateProducto
    },
  ],mode: 'history'
})
