ARG BUILD_FROM
FROM $BUILD_FROM

# Install nodejs 
RUN \
  apk add --no-cache \
    nodejs \
    npm

# Copy startup script
COPY run.sh /
RUN chmod a+x /run.sh

# Copy nodejs app and install npm dependencies
WORKDIR /app
COPY package.json ./
COPY index.js ./
RUN npm install

# Create data dir
WORKDIR /data

# Run startup script
CMD [ "/run.sh" ]