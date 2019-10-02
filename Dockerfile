FROM node:10.13.0
WORKDIR /time-sponsored
COPY . .
RUN npm install
EXPOSE 3001
CMD ["npm", "run", "start"]