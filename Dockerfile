FROM node:18-alpine
WORKDIR /app
# RUN npm install -g npm@9
# COPY package*.json .
# COPY themes .
# COPY extensions .
# COPY public .
# COPY media .
# COPY config .
# COPY translations .
COPY packages/evershop .
RUN npm install
# RUN npm run build
RUN ./bin/evershop build

EXPOSE 80
# CMD ["npm", "run", "start"]
CMD ["./bin/evershop", "start"]
