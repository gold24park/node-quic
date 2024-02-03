### Node.js QUIC echo server/client
5초마다 날짜를 보내는 Client + Echo 서버 예시

## 시작하는 방법
1. .env 파일을 세팅한다.
```
SERVER_PORT=1234
SERVER_HOST=quic.test.com
CLIENT_PORT=5678
```

2. 명령어를 실행한다.
```
./run.sh start
```


## 결과
```
quic-server  | (node:1) ExperimentalWarning: The QUIC protocol is experimental and not yet supported for production use
quic-server  | (Use `node --trace-warnings ...` to show where the warning was created)
quic-client  | (node:1) ExperimentalWarning: The QUIC protocol is experimental and not yet supported for production use
quic-client  | (Use `node --trace-warnings ...` to show where the warning was created)
quic-server  | [stream] [object Object]
quic-client  | [data] echo: Sat Feb 03 2024 09:36:57 GMT+0000 (Coordinated Universal Time)
quic-client  | [data] echo: Sat Feb 03 2024 09:37:02 GMT+0000 (Coordinated Universal Time)
quic-client  | [data] echo: Sat Feb 03 2024 09:37:07 GMT+0000 (Coordinated Universal Time)
quic-client  | [data] echo: Sat Feb 03 2024 09:37:12 GMT+0000 (Coordinated Universal Time)
quic-client  | [data] echo: Sat Feb 03 2024 09:37:17 GMT+0000 (Coordinated Universal Time)
```