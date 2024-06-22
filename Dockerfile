# Use a imagem base node:18-alpine
FROM node:18-alpine

# Defina o diretório de trabalho no contêiner
WORKDIR /home/app

# Copie apenas os arquivos de dependências para o contêiner
COPY package.json package-lock.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Exponha a porta que a aplicação vai usar
EXPOSE 3333

# Defina o comando para iniciar a aplicação
CMD ["npm", "run", "dev"]

