# DevOps_project
# Auto-Deployed Portfolio with CI/CD & Monitoring
A DevOps project that automates the deployment of a personal portfolio website using GitHub Actions, Docker, AWS S3, Terraform, Grafana, and Uptime Robot.

# Tech Stack

Tool	Purpose
GitHub Actions	CI/CD Pipeline
Docker	Containerization
AWS S3	Static Website Hosting
Terraform	Infrastructure as Code (IaC)
Grafana Cloud	Monitoring Metrics
Uptime Robot	Uptime Alerts
# How It Works
Developers push updates → GitHub Actions triggers build and deployment.

Docker containers ensure consistent environments across development and production.

Terraform scripts automate AWS resource creation (S3 bucket for hosting).

Grafana Cloud dashboards and Uptime Robot alerts monitor website uptime and health.

# Project Goals
 100% Automated Deployment (No manual intervention)

 <3 Minute CI/CD Pipeline Execution

 100% Uptime Monitoring via Uptime Robot

 Stay within AWS Free Tier limits (S3, minimal usage)

# Setup & Deployment (High-level)
Clone the repository.

Set up AWS credentials and S3 bucket.

Configure GitHub Actions workflows.

Push changes — automated deployment happens.

Monitor with Grafana & Uptime Robot.

# Project Timeline

Phase	Weeks	Tasks
Planning	1-2	Proposal, Git setup, Tool research
Development	3-5	Build portfolio, set up GitHub Actions CI
Containerization	6-7	Dockerize app, upload to Docker Hub
IaC & Deployment	8-10	Terraform S3 setup, automate deployment
Monitoring	11-12	Grafana dashboard, Uptime Robot alerts
Documentation	13-14	Write README, create architecture diagrams
Presentation Prep	15-16	Final touches, demo rehearsal


# Risks & Mitigation

Risk	Mitigation Strategy
AWS Costs Exceed Free Tier	Set up budget alerts, use minimal AWS services
CI/CD Failures	Local testing, use GitHub Actions debug logs
Docker Issues	Use lightweight Alpine Linux base images
Terraform Misconfiguration	Validate with terraform plan before apply
# Live Website
Coming Soon! (Link will be added after deployment.)



# Thank You for Visiting!
