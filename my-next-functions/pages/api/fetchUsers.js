import axios from 'axios'

async function getData() {
    return await axios.get('https://reqres.in/api/users')
}

exports.getData = getData