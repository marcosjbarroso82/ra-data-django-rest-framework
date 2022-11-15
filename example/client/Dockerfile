FROM node:16

ENV GENERATE_SOURCEMAP=false
ENV NODE_OPTIONS=--max_old_space_size=8192

WORKDIR /usr/src/app

# RUN npm install -g npm@9.1.1

COPY package*.json ./

# RUN yarn install

WORKDIR /usr/src/app

COPY . /usr/src/app

EXPOSE 3000

CMD ["yarn", "start"]