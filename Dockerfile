FROM node:22.11
COPY dist .
CMD ["npm", "start" ]
