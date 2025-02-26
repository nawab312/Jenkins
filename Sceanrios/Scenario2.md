**Imagine you're working on a microservices-based application where multiple teams are responsible for different services. Each service is deployed independently, but there’s a central orchestrator (like Kubernetes) to manage the deployments. You are tasked with setting up a CI/CD pipeline for one of these services. However, the challenge is that this service has a high number of dependencies on other services in the system, and some of these services might not be available for integration testing during the CI pipeline run. Question: How would you design the CI/CD pipeline to handle integration testing in this scenario, where some services might be down, while ensuring that the pipeline is still fast, reliable, and doesn’t block deployments?**

Key Points to Consider:
- Managing dependencies between services.
- Handling service unavailability during testing.
- Ensuring reliability and speed of the pipeline.
- Potential use of mocks or stubs for unavailable services.**
