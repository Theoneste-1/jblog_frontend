FROM node:20-slim

RUN npm install -g pnpm && \
    apt-get update && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy source code and wait script
COPY . .

# Expose port
EXPOSE 3000

# Use the wait script
CMD ["pnpm", "start"]