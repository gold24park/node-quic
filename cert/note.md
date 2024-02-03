## CA(Certificate Authority) 개인키 생성
```
openssl genrsa -out testCA.key 2048
```

## CA CSR(Certificate Signing Request) 생성
SSL 서버를 운영하는 회사의 정보를 암호화하여 인증기관으로 보내 인증서를 발급받게 하는 일종의 신청서입니다.
```
openssl req -new -key testCA.key -out testCA.csr
```


## CA `.crt` 생성
인증서 파일이다. 거의 대부분 PEM 포맷이며, 주로 유닉스/리눅스 기반 시스템에서 통용되는 확장자 이다. `cer` 확장자를 붙이기도 한다.
```
openssl x509 -req -in testCA.csr -signkey testCA.key -out testCA.crt
```