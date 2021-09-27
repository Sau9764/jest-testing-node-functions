import users from '../../pages/api/user'

test(' Testing Users API ', async () => {
    const req = {}
    const res = {}
    
    const objs = await users(req, res)

    console.log(objs.data.data)

    expect(objs.data.data[0].id).toBe(1)

})