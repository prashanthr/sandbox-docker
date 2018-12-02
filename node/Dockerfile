# Node 8.14.x Image
FROM node:8.14-jessie
# Labels & metadata
LABEL version="1.0"
LABEL name="node-docker-bunny"
LABEL description="This is a node docker image"
LABEL maintainer "Prashanth R <https://github.com/prashanthr>"
# OS Upgrades & Dependencies
RUN echo 'Installing OS dependencies...'
RUN apt-get update &&  apt-get dist-upgrade -y && apt-get clean \
&& echo 'Finished installing OS dependencies...'
# Set env
ENV WORK_DIR=/var/www/deploy/app/
ENV NODE_ENV=production
ENV PORT=8080
# Workdir
RUN mkdir -p ${WORK_DIR}
WORKDIR ${WORK_DIR}
# package handling
ADD package*.json ${WORK_DIR}
RUN npm install --${NODE_ENV}
# Install App Dependencies
COPY . ${WORK_DIR}
# Expose port
EXPOSE ${PORT}
# Run application
CMD ["npx babel-node", "./src/index.js"]
