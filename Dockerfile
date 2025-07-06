# Use an official Node.js runtime as a parent image
FROM node:22.12.0

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY server.js .

# Expose the application's port
EXPOSE 8080

# Start the application
CMD ["node", "server.js"]
