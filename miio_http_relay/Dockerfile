ARG BUILD_FROM
FROM $BUILD_FROM

# Install nodejs 
RUN \
  apk add --no-cache \
    icu-data-full=76.1-r1 \
    nodejs=24.13.0-r1 \
    npm=11.6.3-r0

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