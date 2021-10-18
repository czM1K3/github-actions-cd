FROM node:14-slim

WORKDIR /app

COPY index.js index.js

CMD ["node", "index.js"]