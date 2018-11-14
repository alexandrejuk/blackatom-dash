const routes = [
  {
    title: 'Estoque',
    iconType: 'swap',
    subRoutes: [
      {
        title: 'Gerenciar',
        path: '/stock/manager'
      },
      {
        title: 'Liberar',
        path: '/stock/release'
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
        title: 'Produtos',
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
    ]
  }
]

export default routes
