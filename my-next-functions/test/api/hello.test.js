import hello from '../../pages/api/hello'

test(' Async test ', async () => {
    const req = {}
    const json = jest.fn()
    const status = jest.fn(() => {
        return {
            json
        }
    })
    const res = {
        status
    }

    await hello(req, res)

    // console.log(json.mock.calls[0][0].sum)

    expect(json.mock.calls[0][0].sum).toEqual(30)
})