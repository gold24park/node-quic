const { createQuicSocket } = require('net')
const { readFileSync } = require('fs')

const port = process.env.PORT
const key = readFileSync('../cert/testCA.key')
const cert = readFileSync('../cert/testCA.crt')
const ca = readFileSync('../cert/testCA.csr')

const requestCert = true
const alpn = 'echo'

const serverHost = process.env.SERVER_HOST
const serverPort = process.env.SERVER_PORT

const socket = createQuicSocket({
    endpoint: { port: port },
    client: {
        key,
        cert,
        ca,
        requestCert,
        alpn,
        serverHost
    }
})

const req = socket.connect({
    address: serverHost,
    port: serverPort,
})

// secure 이후에만 application-layer의 data를 주고 받을 수 있다.
req.on('secure', () => {
    const stream = req.openStream()
    
    setInterval(() => {
        stream.write(`${new Date()}`)
    }, 5000);
    
    stream.on('data', (chunk) => {
        console.log(`[data] echo: ${chunk}`)
    })
    
    stream.on('end', () => {
        console.log('[end]')
    })
    
    stream.on('close', () => {
        // graceful shutdown
        socket.close()
    })
    
    stream.on('error', (err) => {
        console.error(err)
    })
})