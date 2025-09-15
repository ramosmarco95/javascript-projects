# --- build stage ---
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# --- run stage ---
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# optional: custom nginx config
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
