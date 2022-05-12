FROM node:17-slim

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package*.json ./

# Install node packages
RUN npm install

# COPY
COPY . .
EXPOSE 3000
# Start the app
CMD npm run start

