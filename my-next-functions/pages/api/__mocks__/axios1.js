const get = url => {
    return Promise.resolve({
        data: {
            data: [
                {
                    id: 1
                },
                {
                    id: 2
                }
            ]
        }
    })
}

exports.get = get