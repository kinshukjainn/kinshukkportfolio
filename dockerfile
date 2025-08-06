# Use official Nginx image as base
FROM nginx:alpine

# Clean default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy your production build to nginx's public folder
COPY dist /usr/share/nginx/html

# Expose Nginx's default port
EXPOSE 80

# Start Nginx when container runs
CMD ["nginx", "-g", "daemon off;"]
