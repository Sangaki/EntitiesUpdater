FROM node:13.3.0 AS compile-image

RUN npm install -g yarn

WORKDIR /opt/ng
COPY package.json ./

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN npm install
RUN node_modules/.bin/ng build --prod

FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=compile-image /opt/ng/dist/Frontend /usr/share/nginx/html
