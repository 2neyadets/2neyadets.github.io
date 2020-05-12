
export const reportPayments = async (payload) => {
  return {
    data: [
      {
        clientId: 13103640,
        clientName: 'Чъвжээпщ Чниыга Ввшивщпювж',
        productId: 6366556,
        dealId: null,
        contract: '191148772/6',
        product: 'pdl',
        delay: 51,
        currentDebt: 0,
        payment: {
          id: 1027120242020,
          paidAt: '2020-05-06T11:59:39+03:00',
          amount: 400
        }
      },
      {
        clientId: 13085771,
        clientName: 'Ъфлгцжкв Нфпгбр Чдвкшижеъе',
        productId: 6348794,
        dealId: null,
        contract: '191130967/8',
        product: 'pdl',
        delay: 46,
        currentDebt: 0,
        payment: {
          id: 1027169712020,
          paidAt: '2020-05-07T16:55:12+03:00',
          amount: 180.46
        }
      }
    ]
  }
}
