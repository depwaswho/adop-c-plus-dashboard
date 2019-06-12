FROM node:alpine as builder
RUN apk --no-cache add curl
WORKDIR '/app'
COPY . .
RUN npm install
RUN npm run build
FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html