Ephemeral Memo Pad

A containerized, single-page web application that serves as a temporary memo pad with a terminal-inspired aesthetic. Notes are saved for 24 hours and then automatically cleared by a daily scheduled job.

This project was built as an end-to-end demonstration of a complete DevOps workflow, from infrastructure provisioning to containerization, deployment, and automation.
Features

    Create & View Notes: A simple, single-page interface for writing and viewing daily notes.

    Ephemeral Storage: Notes persist for 24 hours before being automatically deleted.

    Automated Daily Reset: A cron job automates the daily deletion process by recreating the application container.

    Terminal-Inspired UI: A dark, retro-style interface designed with pure HTML, CSS, and JavaScript.

Tech Stack

    Frontend: HTML5, CSS3, JavaScript (ES6)

    Backend: Node.js, Express.js

    Containerization: Docker

    Deployment: Hosted on AWS EC2

    Automation: Cron

    Infrastructure as Code (IaC): Terraform

Running Locally with Docker

    Prerequisites: Make sure you have Docker and Node.js (for npm) installed and running.

    Install Dependencies:
    From the root of the project directory, install the required Node.js packages.

    npm install

    Build the Docker Image:

    docker build -t memo-app .

    Run the Docker Container:

    docker run -d --name my-memo-app -p 8080:3000 memo-app

    Access the Application:
    Open your web browser and navigate to http://localhost:8080.
