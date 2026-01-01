# AWS Cloud Resume Challenge

This is my attempt at the Cloud Resume Challenge in AWS.
What is the Cloud Resume Challenge? - [The Cloud Resume Challenge](https://cloudresumechallenge.dev/) is a multi-step serverless resume project which helps build and demonstrate skills fundamental to pursuing a career in Cloud.

## Architecture

![Architecture Diagram](/img/Architecture-Of-Infra.png)

**Services Used**:

- S3(Standard)

    - Where my website files live
    - Hosts my website as well

- AWS CloudFront

    - Edge-Caching

- Certificate Manager

    - TLS/HTTPS Certificate

- AWS Lambda(Python 3.11)

    - Updates Counter-DB every GET request

- Dynamo DB

    - Where my visitor counter data lives

- GitHub Actions

    - CICD pipeline for frontend

- Terraform(in progress)

    - Automates provisioning of Infra

## Live Demo 🔗
### [Serverless Website](https://resume.it-anc.cloud/)

## Cloud Blog
### [Angel's Cloud Blog](https://blog.it-anc.cloud)
 
## Author
- LinkedIn: [Angel Chavez](www.linkedin.com/in/it-anc)
