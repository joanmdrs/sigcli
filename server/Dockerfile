FROM node:17-slim

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package*.json ./


# generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

# Install node packages
RUN npm install



# COPY
COPY . .

RUN npx prisma generate

EXPOSE 3001


CMD npx prisma generate dev && npm run server











