# HCMatrix Admin Portal

The primary aim of this project is to serve as an admin portal that manages the business operations of . The deployed application can be found [here](https://hcmadmin.azurewebsites.net/).

## Table of Contents

- [Title](#hcmatrix-admin-portal)
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

The primary value proposed by this project is to provide a platform for the hospitality industry to manage their business operations. The app is equipped with a couple of features which are listed in the [Features](#features) section.

## Features

The app is currently equipped with the following features:

- User Authentication: The user should be able to login into the application, and should be prevented from accessing pages that require authentication. The user is also capable of logging out from the User dropdown located on the top left corner.
- Finance Metrics: The app should be able to track finance metrics such as subscription plans, tax reports, scheduled renewal, etc.
- Training Sessions: The app should be able to create and manage training sessions for the hcmatrix application.
- User Metrics: The app should be able to track user activities in the hcmatrix application.

## Getting Started

The application is a react project and uses vite as a build tool, it makes use of the following core packages like React Router, React Query, Antd, and React Auth Kit.

### Prerequisites

You'll need the following to be able to run the application, or to work on the application.

- Node.js version 14 or higher
- Node package manager (Yarn, pnpm or npm)
- A stable internet connection
- A modern browser such as Chrome, Firefox, or Edge
- Connection to the required API's that facilitate the backend infrastructure
- Text editor such as VSCode or Sublime

### Installation

You'll need to do the following to install the project.

- Installs the dependencies of the project using the following command
  ```bash
   npm install # using npm
   yarn install # using yarn
  ```
- Create a .env in the root of the app's folder
  ```bash
  cp .env.example .env   # will create a .env file by copying .env.example
  ```
- You can then fill out the details in the .env file like the VITE_API_BASE_URL
- Once the .env variables are populated, especially the VITE_API_BASE_URL, run the following command, you can then run the app locally


### Running App Locally

You can proceed to run the application after completing the steps in the [Installation](#installation), by running the following command

```bash
npm run dev # using npm
yarn dev # using yarn
```

This will open the application in the browser on `localhost:3000`



### Building and Deploying

The app can either be built locally and the build folder deployed or deployed using the source code on a platform like vercel with CI/CD setup. To build the app for production, run the following command

```bash
npm run build # using npm
yarn build # using yarn
```

## Documentation

The application site is available on the [Hcmatrix V3 App](https://app.hcmatrix.com/). It should be noted that the source code is also documentated via docstring comments and typescript type definitions.
