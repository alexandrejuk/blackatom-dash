const routes = [
  {
    title: 'Estoque',
    iconType: 'swap',
    subRoutes: [
      {
        title: 'Gerenciar',
        path: '/logged/stock/manager'
      },
      {
        title: 'Liberar',
        path: '/logged/stock/release'
      },
      {
        title: 'Disponíveis',
        path: '/logged/stock/available/list'
      },
      {
        title: 'Reservar',
        path: '/logged/stock/reserve/list'
      },
      {
        title: 'Produtos',
        path: '/logged/products/list'
      },
      {
        title: 'Compras',
        path: '/logged/orders/list'
      },
    ]
  }
]

export default routes
