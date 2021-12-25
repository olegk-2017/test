#---------------------------------------------------------------------------
# Dockefile to build Docker Image of Apache WebServer running on Ubuntu
#
# Made by Denis Astahov ADV-IT  13-March-2019
#---------------------------------------------------------------------------

FROM node:latest
RUN mkdir -p /home/web && chown -R node:node /home/web
WORKDIR /home/web


COPY . .

CMD [ "node", "index.js" ]
EXPOSE 8080


