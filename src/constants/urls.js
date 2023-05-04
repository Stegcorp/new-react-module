const placeBaseURL = 'https://jsonplaceholder.typicode.com/'
const carsBaseURL = 'https://owu.linkpc.net/carsAPI/v1'

const users = '/users'
const comments = '/comments'
const cars = '/cars'

const urls = {
    carAPI: {
        cars,
        byId: (id) => `${cars}/${id}`
    },
    placeAPI: {
        users,
        comments
    }
}

export {
    placeBaseURL,
    carsBaseURL,
    urls
}
