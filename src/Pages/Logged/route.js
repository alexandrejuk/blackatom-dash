const routes = [
  {
    title: 'Produtos',
    iconType: 'user',
    subRoutes: [
      {
        title: 'Novo',
        path: '/products/new'
      },
      {
        title: 'Listar',
        path: '/products/list'
      }
    ]
  },
  {
    title: 'Compras',
    iconType: 'shopping-cart',
    subRoutes: [
      {
        title: 'Nova',
        path: '/orders/new'
      },
      {
        title: 'Listar',
        path: '/orders/list'
      }
    ]
  }
]

export default routes
