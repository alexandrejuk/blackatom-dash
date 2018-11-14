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
  },
  {
    title: 'Estoque',
    iconType: 'swap',
    subRoutes: [
      {
        title: 'Gerenciar',
        path: '/stock/manager'
      },
      {
        title: 'Disponíveis',
        subRoutes: [
          {
            title: 'Novo',
            path: '/stock/available/new'
          },
          {
            title: 'Listar',
            path: '/stock/available/list'
          },
        ]
      },
      {
        title: 'Reservar',
        subRoutes: [
          {
            title: 'Novo',
            path: '/stock/reserve/new'
          },
          {
            title: 'Listar',
            path: '/stock/reserve/list'
          },
        ]
      },
      {
        title: 'Liberar',
        path: '/stock/release'
      }
    ]
  }
]

export default routes
