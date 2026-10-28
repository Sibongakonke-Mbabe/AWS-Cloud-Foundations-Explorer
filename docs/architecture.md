# Architecture

## Flow

1. The developer edits HTML, CSS, JavaScript, and documentation in Visual Studio Code.
2. Git records the local changes.
3. GitHub stores the public repository and its commit history.
4. The Amplify GitHub App receives read-only access to the selected repository.
5. AWS Amplify Hosting deploys the connected `main` branch.
6. Visitors open the AWS-provided HTTPS URL.

## Why this architecture

AWS Amplify Hosting provides a managed Git-based deployment workflow. It keeps this beginner project focused on source control, deployment, and cloud concepts instead of server administration.

## Security boundary

This is a static website with no backend and no user-data collection. The repository must not contain passwords, AWS access keys, GitHub tokens, account IDs, or other secrets. The Amplify GitHub App should be authorized only for this repository.

## Cost boundary

The project uses the AWS-provided default domain. It does not enable a custom domain, AWS WAF, a database, or server-side compute. Delete the Amplify app when the live site is no longer needed.