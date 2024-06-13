FROM node:alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

COPY traininglab_accenture_com.pem /usr/local/share/ca-certificates/my-cert.crt

RUN cat /usr/local/share/ca-certificates/my-cert.crt >> /etc/ssl/certs/ca-certificates.crt && \
    apk --no-cache add \
        curl

RUN npm install -g @angular/cli

RUN npm install

CMD ["ng", "serve", "--ssl", "--host","0.0.0.0"]