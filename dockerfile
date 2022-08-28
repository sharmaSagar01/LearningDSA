FROM node:17 
COPY . .
RUN npm install --force --legacy-peer-deps 
CMD ["npm","test"]