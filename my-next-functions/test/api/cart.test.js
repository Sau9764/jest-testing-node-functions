import cart from '../../pages/api/cart'

test('calculate Total', () => {
  const req = {
    body: {
      discount: 0.2,
      tax: 0.06,
      items: [
        {
          id: 1,
          price: 19.99,
          quantity: 2
        },
        {
          id: 2,
          price: 43.49,
          quantity: 1
        }
      ]
    }
  }

  const json = jest.fn()
  
  const status = jest.fn(() => {
    return {
      json
    }
  })

  const res = {
    status
  }

  cart(req, res)

  // console.log(json.mock.calls)

  expect(json.mock.calls[0][0].subtotal).toEqual(83.47)

})
