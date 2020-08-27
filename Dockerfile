FROM svgitlab.spatialvision.com.au:4567/vancouver/wras-api:base

ADD . /usr/app
WORKDIR /usr/app

RUN npm install --quiet && npm run ts-clear

# expose proxy port
# EXPOSE 3010
CMD [ "node", "lib/server.js" ]
