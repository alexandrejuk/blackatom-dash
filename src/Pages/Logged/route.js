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
        title: 'Compras',
        path: '/logged/orders/list'
      },
      {
        title: 'Disponíveis',
        path: '/logged/stock/available/list'
      },
      {
        title: 'Produtos',
        path: '/logged/products/list'
      },
      {
        title: 'Reserva',
        path: '/logged/stock/reserve/list'
      },
      {
        title: 'Liberar',
        path: '/logged/stock/release'
      },
    ]
  }
]

export default routes
