// const baseURL = process.env.REACT_APP_API
const carsBaseURL = 'http://owu.linkpc.net/carsAPI/v1'
const placeBaseURL = 'http://jsonplaceholder.typicode.com'

const urls = {
    carsAPI: {cars: '/cars'},
    placeAPI: {users: '/users', comments: '/comments'}
}
export {
    urls,
    carsBaseURL,
    placeBaseURL
}
