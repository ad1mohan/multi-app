FROM node:19
# Create app directory
WORKDIR /usr
# Install app dependencies
COPY package*.json ./
RUN npm install
# Bundle app source
COPY . .
EXPOSE 80
CMD [ "node", "./src/index.js" ]
