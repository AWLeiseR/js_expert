const http = require('http')

const routes = {
    '/contact:get': (request, response) => {
        response.write('contact us page')
        return response.end('ok')
    },
    // '/contact:get': (request, response) => {
    //     response.write('contact us page')
    //     return response.end('ok')
    // },
    default: (request, response) => {
        response.writeHead(404)
        return response.end('NOT FOUND')
    },
}

function handler(request, response) {
    const { url, method } = request
    const routeKey = `${url.toLowerCase()}:${method.toLowerCase()}`
    const chosen = routes[routeKey] || routes.default
    return chosen(request, response)
}

const app = http.createServer(handler).listen(3000, () => console.log('running at 3000'))
