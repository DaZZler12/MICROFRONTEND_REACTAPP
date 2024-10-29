# MICROFRONTEND_REACTAPP

This project demonstrates a microfrontend architecture using React and Vite. This repository showcases how to build, integrate, and deploy multiple independent React applications as microfrontends, leveraging module federation for seamless integration.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Building and Deployment](#building-and-deployment)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Microfrontend architecture allows you to break down a frontend application into smaller, manageable pieces, each developed and deployed independently. This project uses React and Vite to implement a microfrontend architecture, demonstrating how to share and integrate modules across different applications using module federation.

## Features

- **Microfrontend Architecture**: Independent React applications integrated seamlessly.
- **Module Federation**: Dynamic module sharing between applications.
- **Vite**: Fast build tool and development server.
- **Scalable and Maintainable**: Each microfrontend can be developed, tested, and deployed independently.

## Project Structure

MICROFRONTEND_REACTAPP/ ├── .env.development ├── .env.production ├── .gitignore ├── LICENSE ├── package.json ├── README.md ├── main-app/ │ ├── .gitignore │ ├── eslint.config.js │ ├── index.html │ ├── package.json │ ├── public/ │ ├── src/ │ ├── tsconfig.app.json │ ├── tsconfig.json │ ├── tsconfig.node.json │ ├── vite.config.ts │ └── README.md ├── first-app/ │ ├── .gitignore │ ├── eslint.config.js │ ├── index.html │ ├── package.json │ ├── public/ │ ├── src/ │ ├── tsconfig.app.json │ ├── tsconfig.json │ ├── tsconfig.node.json │ ├── vite.config.ts │ └── README.md └── second-app/ ├── .gitignore ├── eslint.config.js ├── index.html ├── package.json ├── public/ ├── src/ ├── tsconfig.app.json ├── tsconfig.json ├── tsconfig.node.json ├── vite.config.ts └── README.md




## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- Yarn (or npm)

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:DaZZler12/MICROFRONTEND_REACTAPP.git
   cd MICROFRONTEND_REACTAPP
    ```
2. Install dependencies:

   ```bash
   yarn install
   ```
    or
    ```bash
    npm install
    ```

## Development

Running the Applications
Each microfrontend application can be run independently. Navigate to the respective directory and start the development server.

Main App
```bash
cd main-app
yarn dev
```
First App
```bash
cd first-app
yarn dev
```
Second App
```bash
cd second-app
yarn dev
```

Module Federation

The project uses @originjs/vite-plugin-federation to enable module federation. This allows different microfrontends to share and consume modules dynamically.

Example Configuration
first-app/vite.config.ts
```typescript
import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
export default defineConfig({
  plugins: [
    federation({
      name: 'first_app',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
      },
    }),
  ],
});
```
main-app/vite.config.ts
```typescript
import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
export default defineConfig({
  plugins: [
    federation({
      name: 'main_app',
      remotes: {
        first_app: 'http://localhost:3001/remoteEntry.js',
      },
    }),
  ],
});
``` 
The main-app imports the App component from the first-app using the remote entry URL.


## Building and Deployment

Each microfrontend can be built independently. Navigate to the respective directory and run the build command.

Main App
```bash
cd main-app
yarn build
```
First App
```bash
cd first-app
yarn build
```
Second App
```bash
cd second-app
yarn build
```
Deploy the built files from the dist directory of each application to your preferred hosting service.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

## License

Distributed under the MIT License. See [LICENSE](https://github.com/DaZZler12/MICROFRONTEND_REACTAPP?tab=MIT-1-ov-file) for more information.
