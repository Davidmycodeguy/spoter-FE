FROM node:16-alpine 
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
RUN npm i --force
COPY . .
EXPOSE 5173
CMD [ "yarn","dev", "--host" ]