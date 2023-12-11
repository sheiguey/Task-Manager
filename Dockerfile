FROM node:lts-alpine3.18

WORKDIR /app

COPY src/ src/

COPY public/ public/

COPY package*.json ./

RUN npm install --omit=dev

RUN chown -R node /app/node_modules

USER node

CMD ["npm","start"]

EXPOSE 8000