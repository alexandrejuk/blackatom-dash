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
        title: 'Reservar',
        path: '/logged/stock/reserve/list'
      },
    ]
  }
]

export default routes
