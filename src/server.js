const { createQuicSocket } = require('net')
const { readFileSync } = require('fs')

const port = process.env.PORT
const key = readFileSync('../cert/testCA.key')
const cert = readFileSync('../cert/testCA.crt')
const ca = readFileSync('../cert/testCA.csr')

const requestCert = true
const alpn = 'echo'

const server = createQuicSocket({
    endpoint: { port: port },
    server: {
        key,
        cert,
        ca,
        requestCert,
        alpn
    }
})

server.listen()

server.on('read', () => {
    console.log('[read]')
})

server.on('session', (session) => {
    session.on('stream', (stream) => {
        console.log(`[stream] ${stream}`)
        stream.pipe(stream) // echo
    })
})