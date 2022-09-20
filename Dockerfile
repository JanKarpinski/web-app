FROM node

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY web-app/package.json ./
COPY web-app/package-lock.json ./
RUN npm install
RUN npm install react-scripts -g 

COPY web-app/ ./

CMD ["npm", "start"]
