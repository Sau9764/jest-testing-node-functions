
const getData = () => {
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

exports.getData = getData