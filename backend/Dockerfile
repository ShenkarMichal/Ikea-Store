# OS
FROM node:18-alpine3.16

# Global installation
RUN npm i -g ts-node
RUN npm i -g nodemon

# Create app folder
WORKDIR /app

# Copy only package.json + package-lock.json
COPY package*.json /app

# Install node_modules
RUN npm i

# Copy application to workdir
COPY . /app

# Execute command
ENTRYPOINT npm start

# Building the image in the terminal:
# docker build -t <The image name> .

# Create container in the terminal:
# docker create --name <container name> -p 5000:4000 <image name>

# Run container in the terminal:
# docker start <container name>




