# Use the official Node.js image as a build environment
FROM node:18 AS build
 
# Set the working directory
WORKDIR /app
 
# Install dependencies
COPY package*.json ./
RUN npm install
 
# Copy the rest of the application code
COPY . .
 
# Build the React app
RUN npm run build
 
# Use an official Nginx image to serve the React app
FROM nginx:alpine
 
# Copy the build artifacts from the previous stage
COPY --from=build /app/build /usr/share/nginx/html
 
# Expose port 1001 for the application
EXPOSE 1001
 
# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
