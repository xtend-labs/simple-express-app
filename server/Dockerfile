FROM node:12.18.3

LABEL version="1.0"
LABEL description="Docker image for basic react node app"


WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .

EXPOSE 8080

CMD ["node", "./src/index.js"]