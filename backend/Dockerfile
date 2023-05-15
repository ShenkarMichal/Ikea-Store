# OS
FROM node:18-alpine3.16

# Global installation
RUN npm i -g ts-node

# Create app folder
WORKDIR /app

# Copy application to workdir
COPY . /app

# Install node_modules
RUN npm i

# Execute command
ENTRYPOINT npm start

# Building the image in the terminal:
# docker build -t <The image name> .




