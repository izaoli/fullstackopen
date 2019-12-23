import axios from 'axios'
const baseUrl = '/api/notes'

const getRequestObject = request => request.then(response => response.data)

const getAll = () => {
    const request = axios.get(baseUrl)
    const nonExisting = {
        id: 10000,
        content: 'This note is not saved to server',
        date: '2019-05-30T17:30:31.098Z',
        important: true,
    }
    return request.then(response => response.data.concat(nonExisting))
}

const create = newObject => getRequestObject(axios.post(baseUrl, newObject))

const update = (id, newObject) => getRequestObject(axios.put(`${baseUrl}/${id}`, newObject))

export default { getAll, create, update }
