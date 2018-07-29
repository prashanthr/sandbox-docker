# Node 8.11.3 Image
FROM node:8.11.3

# OS Upgrades & Dependencies
RUN apt-get update &&  apt-get dist-upgrade -y && apt-get clean \
&& echo 'Finished installing OS dependencies...'

# Install App Dependencies
COPY package.json /.app/

# Install packages
RUN npm install --production