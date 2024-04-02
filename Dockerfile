# Use an official Node runtime as the parent image
FROM node:16 as build-stage

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY ./client/package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the current directory contents into the container at /app
COPY ./client .

# Build the app
RUN npm run build

FROM nginx as production-stage

# Copy built app to nginx server
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
