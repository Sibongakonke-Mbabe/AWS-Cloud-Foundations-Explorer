# Cloud Concepts and Service Choices

## Cloud computing

Cloud computing provides on-demand access to compute, storage, databases, applications, and other IT resources over the internet with pay-as-you-go pricing.

## Pay as you go

AWS pricing generally lets customers use individual services for as long as needed and pay for the resources consumed. Cost awareness still matters because paid services or usage beyond an allowance can create charges on a paid account.

## Regions and Availability Zones

An AWS Region is a separate geographic area. Each Region has multiple isolated locations called Availability Zones. Many AWS resources belong to the selected Region, so builders must pay attention to their current Region in the AWS Management Console.

## Shared responsibility

AWS is responsible for security of the cloud infrastructure. Customers are responsible for security in the cloud, including their data, access permissions, and service configuration. The exact split changes with the service being used.

## Service guide

| Need | AWS service | Reason |
| --- | --- | --- |
| On-demand virtual server | Amazon EC2 | Provides scalable computing capacity as virtual servers |
| Object storage | Amazon S3 | Stores data as objects in buckets |
| Isolated virtual network | Amazon VPC | Defines virtual networks, subnets, routing, and connectivity |
| Managed relational database | Amazon RDS | Manages common relational database administration tasks |
| Managed NoSQL database | Amazon DynamoDB | Provides a serverless, fully managed, distributed NoSQL database |
| Authentication and authorization | AWS Identity and Access Management | Controls access to AWS resources |

## Project connection

The website source lives in GitHub. AWS Amplify Hosting connects to the repository and deploys the static site. This demonstrates managed cloud hosting and continuous deployment without creating a server to patch or administer.