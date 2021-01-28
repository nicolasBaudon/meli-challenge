FROM node:alpine
RUN mkdir /app
COPY . /app
WORKDIR /app
RUN npm install --global pm2
RUN yarn \ 
    && yarn build
EXPOSE 3000
CMD [ "pm2-runtime", "npm", "--", "start" ]