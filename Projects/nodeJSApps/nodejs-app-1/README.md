## Project Description 
This project is a simple Node.js application built using Express.js for handling HTTP requests. The application has a single route (GET /) that returns a basic message: "Hello, Jenkins!". This is a simple demonstration of building a web server with Node.js and testing it with automated tests.

In addition to the basic Node.js application, the project integrates a Jenkins pipeline for Continuous Integration (CI) and Continuous Deployment (CD). The Jenkins pipeline automates various stages of the software development lifecycle, including:

    Code Checkout – Pulling the latest changes from the GitHub repository.
    Dependency Installation – Installing the required Node.js packages using npm install.
    Running Tests – Executing unit tests with Jest to ensure the application behaves as expected.
    Build – This is a placeholder step in the Jenkins pipeline (useful if you need to build or package your app).
    Deployment – A placeholder stage where you would add your deployment logic to deploy the application to your desired environment.
