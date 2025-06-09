# AWS Cloud Resume Challenge

This is my attempt at cloud resume challenge in AWS.
What is Cloud Resume Challenge? - [The Cloud Resume Challenge](https://cloudresumechallenge.dev/) is a multiple-step resume project which helps build and demonstrate skills fundamental to pursuing a career in Cloud. The project was published by Forrest Brazeal.

## Architecture

graph TB
    %% External
    User[👤 User]
    GitHub[📁 GitHub Repository]
    
    %% Frontend Services
    subgraph "Frontend"
        Route53[🌐 Route 53<br/>DNS]
        CloudFront[⚡ CloudFront<br/>CDN]
        S3[🗂️ S3<br/>Static Files]
        ACM[🔒 Certificate Manager<br/>SSL/TLS]
    end
    
    %% Backend Services  
    subgraph "Backend"
        Lambda[⚙️ Lambda<br/>Function URL]
        DynamoDB[🗄️ DynamoDB<br/>Counter Table]
    end
    
    %% CI/CD
    subgraph "CI/CD"
        Actions[🔄 GitHub Actions<br/>Pipeline]
    end
    
    %% User Flow
    User -->|1. Visit website| Route53
    Route53 -->|2. Route traffic| CloudFront
    CloudFront -->|3. Serve content| S3
    CloudFront -->|4. Return to| User
    
    %% SSL
    ACM -.->|Provides SSL| CloudFront
    
    %% Counter Flow
    User -->|5. Page loads JS| Lambda
    Lambda -->|6. Update count| DynamoDB
    Lambda -->|7. Return count| User
    
    %% CI/CD Flow
    GitHub -->|Push code| Actions
    Actions -->|Deploy| S3
    Actions -.->|Invalidate cache| CloudFront
    
    %% Styling
    classDef aws fill:#FF9900,stroke:#232F3E,stroke-width:2px,color:#fff
    classDef frontend fill:#4CAF50,stroke:#2E7D32,stroke-width:2px,color:#fff  
    classDef backend fill:#2196F3,stroke:#1565C0,stroke-width:2px,color:#fff
    classDef cicd fill:#9C27B0,stroke:#4A148C,stroke-width:2px,color:#fff
    classDef external fill:#607D8B,stroke:#37474F,stroke-width:2px,color:#fff
    
    class Route53,CloudFront,S3,ACM,Lambda,DynamoDB aws
    class User,GitHub external

**Services Used**:

- S3(Standard)
- AWS CloudFront
- Certificate Manager
- AWS Lambda(Python 3.11)
- Dynamo DB
- GitHub Actions
- Terraform(in progress)

## [Live Demo 🔗](https://awsresume.it-anc.cloud/)

## YouTube Series I Followed

- Part 1 - [What is the Cloud Resume Challenge?](https://youtu.be/NNKzYhvqq5w)
- Part 2 - [Setting up S3 bucket and CloudFront](https://youtu.be/P5UGhdud_ss)
- Part 3 - [Setting up Dynamo DB and AWS Lambda Function](https://youtu.be/x5iTWZbOgww)
- Part 4 - [Lambda and JavaScript to get viewer counter](https://youtu.be/x6TIihJSaLA)
- Part 5 - [Setting up Git repo and CI/CD for frontend website](https://youtu.be/qFEf6iOo-4g)
- Part 6 - [Implementing Infrastructure as Code with Terraform](https://youtu.be/rzdSuiU_TQc)

## Blog Series
- 1. (coming soon)
 
## Author
- LinkedIn: [Angel Chavez](www.linkedin.com/in/angel-chavez-itanc)
