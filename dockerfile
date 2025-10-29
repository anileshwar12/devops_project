# Use official Node.js LTS image
FROM node:18-alpine


# Create app directory
WORKDIR /app


# Copy package.json and package-lock.json (if exists)
COPY package*.json ./


# Install dependencies
RUN npm install --production


# Copy app source
COPY . .


# Expose port
EXPOSE 3000


# Start the app
CMD ["node", "index.js"]