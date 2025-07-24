# Use a lightweight Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# The command to run when the container starts
CMD [ "npm", "start" ]
