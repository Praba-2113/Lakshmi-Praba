# Cloud Resume Challenge — Lakshmi Praba Mathiyalagan

A professional, ATS-friendly resume website built as part of the **AWS Cloud Resume Challenge**, demonstrating hands-on experience with static site hosting, serverless backend development, and CI/CD on AWS.

> **Live site:** [YOUR_LIVE_WEBSITE_URL]
> **Author:** Lakshmi Praba Mathiyalagan — [lakshmipraba.2113@gmail.com](mailto:lakshmipraba.2113@gmail.com)

---

## About the Project

This repository contains the frontend for my Cloud Resume Challenge — a resume website that also serves as a working demonstration of core AWS cloud skills: static hosting, content delivery, serverless APIs, and infrastructure automation.

**Note:** This README lists the full intended Cloud Resume Challenge architecture. Update the checklist below to reflect only the parts that are actually deployed at any given time.

- [ ] Static site hosted on Amazon S3
- [ ] Delivered via Amazon CloudFront (HTTPS)
- [ ] Custom domain via Route 53
- [ ] Visitor counter API via API Gateway + AWS Lambda (Python)
- [ ] Data stored in DynamoDB
- [ ] Infrastructure defined with AWS SAM
- [ ] CI/CD pipeline via GitHub Actions

## Architecture

```
Browser
   ↓
JavaScript (fetch API)
   ↓
Amazon API Gateway
   ↓
AWS Lambda (Python + boto3)
   ↓
Amazon DynamoDB
```

The frontend (HTML/CSS/JS) is served as static files from **Amazon S3**, distributed globally through **Amazon CloudFront** over **HTTPS**, with DNS managed by **Route 53**. The visitor counter on the page calls an **API Gateway** endpoint, which triggers a **Lambda** function to read/increment a value in **DynamoDB** — the browser never talks to DynamoDB directly.

## Technologies Used

| Layer            | Technology                                  |
|-------------------|----------------------------------------------|
| Frontend          | HTML5, CSS3, Vanilla JavaScript              |
| Hosting           | Amazon S3, Amazon CloudFront                 |
| DNS / HTTPS       | Route 53                                     |
| Backend API       | Amazon API Gateway                           |
| Compute           | AWS Lambda (Python, boto3)                   |
| Database          | Amazon DynamoDB                              |
| Infrastructure    | AWS SAM                                      |
| CI/CD             | GitHub Actions                               |

*(Only technologies actually implemented should be marked as complete — see checklist above.)*

## Features

- Clean, modern, recruiter-friendly resume layout
- Fully responsive (desktop, tablet, mobile)
- Semantic, accessible HTML with proper ARIA and focus states
- Live visitor counter backed by a serverless AWS API
- SEO-ready metadata (Open Graph, meta description)
- No frameworks — lightweight, fast-loading static site
- No AWS credentials or secrets anywhere in the frontend code

## Project Structure

```
cloud-resume/
│
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images/
│   └── favicon/
└── README.md
```

## Local Setup

1. Clone or download this repository.
2. Open the `cloud-resume` folder in VS Code.
3. Open `index.html` with the "Live Server" extension, or simply double-click `index.html` to view it in your browser.

No build tools, package installs, or dependencies are required — this is a static HTML/CSS/JS site.

## Visitor Counter Architecture

The visitor counter in `script.js` calls a configurable `API_URL` constant:

```js
var API_URL = "[YOUR_API_GATEWAY_URL]";
```

Until a real API Gateway endpoint is connected, the counter displays a clear placeholder message instead of failing silently. Once the backend (API Gateway → Lambda → DynamoDB) is deployed, replace `API_URL` with the deployed endpoint.

The frontend never connects directly to DynamoDB and never contains AWS access keys or secret keys.

## CI/CD Overview

*(To be completed once GitHub Actions is set up.)* The intended pipeline: on every push to `main`, GitHub Actions runs basic checks and syncs the static files to the S3 bucket, then invalidates the CloudFront cache so changes go live automatically.

## Deployment Overview

1. Create an S3 bucket configured for static website hosting (or as a CloudFront origin).
2. Upload `index.html`, `style.css`, `script.js`, and the `assets/` folder.
3. Create a CloudFront distribution pointing to the S3 bucket, with HTTPS enabled.
4. (Optional) Point a custom domain at CloudFront using Route 53.
5. Deploy the backend (API Gateway + Lambda + DynamoDB) separately, ideally via AWS SAM.
6. Update `API_URL` in `script.js` with the deployed API Gateway endpoint.

## Screenshots

*(Add screenshots of the live site here once deployed.)*

## Author

**Lakshmi Praba Mathiyalagan**
B.Tech CSE (AI & ML), Periyar Maniammai Institute of Science and Technology
📧 [lakshmipraba.2113@gmail.com](mailto:lakshmipraba.2113@gmail.com)
🔗 [LinkedIn](https://linkedin.com/in/lakshmi-praba-m)
🔗 GitHub: [YOUR_GITHUB_URL]

---

*No AWS credentials, access keys, or secrets are included anywhere in this repository.*