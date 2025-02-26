You’re managing the CI/CD pipeline for a large-scale application with multiple microservices. Each microservice has its own repository, and they depend on each other to function correctly. The application is deployed to production in phases, with multiple services being deployed at once.
A new requirement has come up: the deployment pipeline must **minimize downtime** during updates to critical services that affect user experience, such as the `PaymentService` and `NotificationService`, but also ensure **backward compatibility** while enabling teams to deploy independently.

**Question:** How would you design the CI/CD pipeline to achieve **minimal downtime**, ensure **backward compatibility**, and allow for **independent deployments** of microservices? What strategies, tools, or best practices would you implement to address these challenges in the pipeline?

Think About:
- How you might handle multiple services and dependencies.
- Strategies for `zero downtime` deployments (e.g., blue-green, canary).
- How to ensure `backward compatibility` (e.g., versioning, feature toggles).
- Ensuring that independent deployments don’t cause issues in the overall system.
