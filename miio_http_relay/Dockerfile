ARG BUILD_FROM
FROM $BUILD_FROM

# Install nodejs 
RUN \
  apk add --no-cache \
    icu-data-full=74.2-r0 \
    nodejs=22.13.1-r0 \
    npm=10.9.1-r0 \

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