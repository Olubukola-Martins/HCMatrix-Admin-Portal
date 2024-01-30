# Hcmatrix v3 Admin Portal

The primary aim of this application is to manage the clients that make use of the hcmatrix v3, and provide valuable insights on the usage of hcmatrix v3. The deployed application can be found [here](/).

## Table of Contents

- [Title](#hcmatrix-v3-admin-portal)

  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Getting Started](#getting-started)

    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running App Locally](#running-app-locally)
    - [Building and Deploying](#building-and-deploying)

  - [Documentation](#documentation)

## Introduction

The primary value proposed by this project is to provide a platform for the stake holders to manage the clients using the hcmatrix v3. The project's features are outlined in the [Features](#features) section.

## Features

The app is currently equipped with the following features:

- Settings: This contains the settings for the application namely users, roles & permissions, prices and discounts.
- Finance Metrics: This a dashboard with information on scheduled renewals, transaction history, tax report, and analytics on income rate, income per module, and income per addon.

## Getting Started

The application is a react application built using vite. The application tech stack is outlined below:

- Vite
- Antd
- Antd/plots
- React router
- React query
- Typescript
- React

### Prerequisites

You'll need the following to be able to run the application, or to work on the application.

- Node.js version 14 or higher
- Node package manager (Yarn, pnpm or npm)
- A stable internet connection
- A modern browser such as Chrome, Firefox, or Edge
- Text editor such as VSCode or Sublime

### Installation

You'll need to do the following to install the project.

- Installs the dependencies of the project using the following command
  ```bash
   npm install # using npm
   yarn install # using yarn
  ```
- Create a database either via Postgres or SQL
- Create a .env in the root of the app's folder
  ```bash
  cp .env.example .env   # will create a .env file by copying .env.example
  ```
- You can then fill out the details in the .env file like the APP_URL

### Running App Locally

You can proceed to run the application after completing the steps in the [Installation](#installation), by running the following command

```bash
npm run dev # using npm
yarn dev # using yarn
```

This will open the application in the browser on `localhost:3000`

### Building and Deploying

The app can either be built locally and the build folder deployed or deployed using the source code on a platform like aws with a CI/CD setup. To build the app for production, run the following command

```bash
npm run build # using npm
yarn build # using yarn
```

## Documentation

The application documentation is available on the [Hcmatrix Admin Portal documentation](/). It should be noted that the source code is also documentated via docstring comments and typescript type definitions.
