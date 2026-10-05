FROM node:22-bookworm-slim
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --omit=dev
COPY . .
RUN sh build-static.sh
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node","server.js"]
