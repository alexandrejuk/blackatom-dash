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
        path: '/stock/available/list'
      },
      {
        title: 'Reservar',
        path: '/stock/reserve/list'
      },
      {
        title: 'Produtos',
        path: '/products/list'
      },
      {
        title: 'Compras',
        path: '/orders/list'
      },
    ]
  }
]

export default routes
